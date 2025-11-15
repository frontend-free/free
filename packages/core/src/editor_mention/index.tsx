import { useMemoizedFn, useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { escapeHTML } from './helper';

interface EditorMentionItem {
  value: string;
  label: string;
}

interface EditorMentionProps {
  value?: string;
  onChange?: (value: string) => void;
  /** 默认前缀 */
  prefix?: string[];
  /** 下拉列表 */
  items?: {
    label: string;
    options: EditorMentionItem[];
  }[];
  /** 渲染下拉列表 */
  renderItem?: (props: { item: EditorMentionItem; index: number }) => React.ReactNode;
  renderTagHTML?: (props: { item: EditorMentionItem }) => string;
  placeholder?: string;
  resizeHeight?: boolean;
  defaultHeight?: number;
}

const emptyArr = [];
const tagClassName = 'fec-editor-mention-tag';
const defaultPrefix = ['/'];

function defaultRenderItem({ item }) {
  return <div className="py-1 pl-4 pr-2 text-sm">{item.label}</div>;
}

function defaultRenderTagHTML({ item }) {
  return `<span class="text-sm h-[1em] rounded px-1 bg-gray-100">${item.label}</span>`;
}

function createMentionTag({ item, renderTagHTML }) {
  const span = document.createElement('span');
  span.className = tagClassName;
  span.setAttribute('data-value', item.value);
  span.contentEditable = 'false';
  span.innerHTML = renderTagHTML({ item });

  return span;
}

function insertMention({ item, renderTagHTML }) {
  const selection = window.getSelection();

  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);

    // 删除触发字符
    try {
      range.setStart(range.endContainer, range.endOffset - 1);
      range.deleteContents();
    } catch (e) {
      console.error('Error setting range:', e);
    }

    // 创建变量标签元素
    const span = createMentionTag({ item, renderTagHTML });

    // 插入变量标签
    range.insertNode(span);

    // 将光标移动到变量标签后面
    range.setStartAfter(span);
    range.setEndAfter(span);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

function useDropdown({ items, renderItem, onSelect, editorRef }) {
  const [show, setShow] = useState(false);

  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleSelect = (item: { value: string; label: string }) => {
    setShow(false);
    onSelect(item);
  };

  // 当下拉框显示时，点击外部区域关闭下拉框
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (editorRef.current && !editorRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const node = show && (
    <div
      // 阻止下拉菜单点击事件冒泡
      onClick={(e) => e.stopPropagation()}
      className="absolute z-10 max-h-[250px] max-w-[250px] overflow-y-auto rounded bg-white p-1 shadow-md"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {items.length === 0 && <div className="p-2 text-sm text-03">暂无数据</div>}
      {items.map((group, i) => (
        <div key={group.label}>
          <div className="p-2 text-sm text-03">{group.label}</div>
          <div>
            {group.options.map((item) => (
              <div
                key={item.value}
                onMouseDown={(e) => {
                  e.preventDefault(); // 防止失去焦点
                  handleSelect(item);
                }}
                className="cursor-pointer rounded hover:bg-gray-100"
              >
                {renderItem({ item, index: i })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return { node, setPosition, setShow };
}

function useContent({ value, items, renderTagHTML }) {
  const initialContent = useMemo(() => {
    let html = escapeHTML(value || '');
    // 替换变量
    items.forEach((group) => {
      group.options.forEach((item) => {
        html = html.replace(
          new RegExp(escapeHTML(item.value), 'g'),
          createMentionTag({ item, renderTagHTML }).outerHTML,
        );
      });
    });

    // 处理换行
    html = html.replace(/\n/g, '<br>');

    return html;
  }, [value, items, renderTagHTML]);

  const [content, setContent] = useState(initialContent);

  return {
    setContent,
    content,
  };
}

function useChange({ content, editorRef, onChange }) {
  const ref = useRef<HTMLDivElement>(null);

  // 获取最终输出文本（将标签转换为变量格式）
  const getOutputValue = useCallback(() => {
    if (!editorRef.current || !ref.current) {
      return '';
    }

    ref.current.innerHTML = editorRef.current.innerHTML;

    // 查找所有变量标签并替换为变量格式
    const tags = ref.current.querySelectorAll(`.${tagClassName}`);
    tags.forEach((tag) => {
      const value = tag.getAttribute('data-value');
      const textNode = document.createTextNode(value!);
      tag.parentNode?.replaceChild(textNode, tag);
    });

    return ref.current.innerText || '';
  }, [editorRef]);

  const change = useMemoizedFn((arg) => {
    onChange?.(arg);
  });

  // 问题：
  // - 之前使用 useEffect，首次 effect 的时候上层是 hidden，然后 innerText 获取到换行符丢了（不知道为啥），onChange 回去的时候换行符就没了。
  // - 之后如果点了保存，则换行符就丢了。
  // 解法：onChange 只有首次 effect 和后续改动文本。前缀换成 useUpdateEffect，后者的时候非 hidden 了，所以没有问题。
  useUpdateEffect(() => {
    change(getOutputValue());
  }, [content, getOutputValue, change]);

  const node = (
    <div
      ref={ref}
      className="absolute left-[-10px] top-[-10px] h-[1px] w-[1px] overflow-auto"
      contentEditable="true"
    />
  );

  return { node };
}

const EditorMention = ({
  value,
  onChange,
  prefix = defaultPrefix,
  items = emptyArr,
  renderItem = defaultRenderItem,
  placeholder = '输入 / 插入提示内容',
  renderTagHTML = defaultRenderTagHTML,
  resizeHeight,
  defaultHeight,
}: EditorMentionProps) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const { content, setContent } = useContent({ value, items, renderTagHTML });

  useEffect(() => {
    console.log('EditorMention 为非受控组件，请注意');
    if (!editorRef.current) {
      return;
    }

    editorRef.current.innerHTML = content;
  }, []);

  const { node: tempNode } = useChange({
    content,
    editorRef,
    onChange,
  });

  // 处理变量选择
  const handleSelectVariable = useCallback(
    (item: { value: string; label: string }) => {
      if (!editorRef.current) {
        return;
      }

      // 确保编辑器获得焦点
      editorRef.current.focus();

      // 插入 mention
      insertMention({ item, renderTagHTML });

      // 更新内容
      setContent(editorRef.current.innerHTML);

      // 确保编辑器保持焦点
      setTimeout(() => {
        editorRef.current?.focus();
      }, 0);
    },
    [renderTagHTML, setContent],
  );

  const {
    node: dropdownNode,
    setShow: setDropdownShow,
    setPosition: setDropdownPosition,
  } = useDropdown({
    items,
    renderItem,
    onSelect: handleSelectVariable,
    editorRef,
  });

  // 处理输入事件
  const handleInput = useCallback(
    (e) => {
      const text = e.currentTarget.innerHTML;
      setContent(text);

      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);

        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(e.currentTarget);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        const textBeforeCaret = preCaretRange.toString();

        // 检查是否输入了 '\'
        const isMatch = prefix.some((p) => textBeforeCaret.endsWith(p));
        if (isMatch) {
          // 计算下拉框位置
          const rect = range.getBoundingClientRect();
          const editorRect = editorRef.current?.getBoundingClientRect();

          if (editorRect) {
            setDropdownPosition({
              top: rect.bottom - editorRect.top,
              left: rect.left - editorRect.left,
            });
            setDropdownShow(true);
          }
        } else {
          setDropdownShow(false);
        }
      }
    },
    [prefix, setContent, setDropdownPosition, setDropdownShow],
  );

  // 处理键盘事件
  const handleKeyDown = useCallback(
    (e) => {
      // 如果按下 Escape 键，关闭下拉框
      if (e.key === 'Escape') {
        setDropdownShow(false);
      }
    },
    [setDropdownShow],
  );

  const isEmpty = !content || content === '<br>';

  return (
    <div className="c-editor-mention relative flex h-full">
      <div
        ref={editorRef}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className={classNames(
          'fec-border w-full flex-1 overflow-y-auto rounded p-2 outline-none focus:border-primary',
          resizeHeight && 'resize-y',
        )}
        style={{
          height: defaultHeight,
        }}
      />
      {placeholder && isEmpty && (
        <div
          className="absolute left-0 top-0 cursor-text p-2 text-gray-500"
          onClick={() => {
            editorRef.current?.focus();
          }}
        >
          {placeholder}
        </div>
      )}
      {dropdownNode}
      {tempNode}
    </div>
  );
};

export { EditorMention };
export type { EditorMentionProps };

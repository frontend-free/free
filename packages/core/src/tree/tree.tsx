import { PageLayout } from '@fe-free/core';
import { useDebounce } from 'ahooks';
import type { TreeProps as AntdTreeProps } from 'antd';
import { Tree as AntdTree, Input } from 'antd';
import type { DataNode } from 'antd/es/tree';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { flatToTreeData } from './helper';
import './style.scss';

interface TreeProps<T extends DataNode> {
  /** 标题 */
  title?: string | ReactNode;
  /** 标题描述 */
  titleDescription?: string | ReactNode;
  /** 标题额外内容 */
  titleExtra?: ReactNode;
  /** 启用搜索 */
  enableSearch?: boolean;
  /** Antd 树的 props */
  treeProps?: AntdTreeProps<T>;
}

function useHighLightTreeData({ treeData, search }) {
  return useMemo(() => {
    if (!search) {
      return treeData;
    }

    const loop = (data) => {
      return data.map((item) => {
        const originStrTitle = item.title as string;
        const index = originStrTitle.indexOf(search);
        const beforeStr = originStrTitle.substring(0, index);
        const afterStr = originStrTitle.slice(index + search.length);
        const title =
          index > -1 ? (
            <span key={item.key}>
              {beforeStr}
              <span className="text-red-500">{search}</span>
              {afterStr}
            </span>
          ) : (
            <span key={item.key}>{originStrTitle}</span>
          );

        if (item.children) {
          return { ...item, title, children: loop(item.children) };
        }

        return {
          ...item,
          title,
          originData: item,
        };
      });
    };

    return loop(treeData);
  }, [search, treeData]);
}

function useFilterTreeData({ treeData, search }) {
  return useMemo(() => {
    if (!search || !treeData) {
      return treeData;
    }

    const searchLower = search.toLowerCase();

    // 检查节点是否匹配搜索条件
    const isNodeMatch = (node) => {
      const title = typeof node.title === 'string' ? node.title : '';
      return title.toLowerCase().includes(searchLower);
    };

    // 递归过滤树形数据
    const filterTree = (nodes) => {
      // 返回自己。 而非 [] undefined，因为要保留原数据格式。
      if (!nodes || nodes.length === 0) {
        return nodes;
      }

      return nodes
        .map((node) => {
          const isMatch = isNodeMatch(node);

          const children = filterTree(node.children);
          const hasMatchingChildren = children?.length > 0;

          // 如果当前节点匹配或者有匹配的子节点，则保留该节点
          if (isMatch || hasMatchingChildren) {
            return {
              ...node,
              children,
            };
          }

          return null;
        })
        .filter(Boolean); // 过滤掉null值
    };

    return filterTree(treeData);
  }, [treeData, search]);
}

function useIsAllLeaf(treeData?: DataNode[]) {
  return useMemo(() => {
    if (treeData) {
      return !treeData.find((item) => item.children);
    }

    return true;
  }, [treeData]);
}

function Tree<T extends DataNode>(props: TreeProps<T>) {
  const { title, titleDescription, titleExtra, enableSearch, treeProps } = props;

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, { wait: 300 });

  const isAllLeaf = useIsAllLeaf(treeProps?.treeData);

  const filterTreeData = useFilterTreeData({
    treeData: treeProps?.treeData,
    search: debouncedSearch,
  });
  const highlightedTreeData = useHighLightTreeData({
    treeData: filterTreeData,
    search: debouncedSearch,
  });
  const newTreeData = highlightedTreeData;

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const searchExpandKeysProps = useMemo(() => {
    if (!debouncedSearch) {
      return {};
    }

    const keys: string[] = [];
    function loop(arr) {
      arr.forEach((item) => {
        keys.push(item.key);
        if (item.children) {
          loop(item.children);
        }
      });
    }
    loop(newTreeData);

    return { expandedKeys: keys };
  }, [debouncedSearch, newTreeData]);

  const node = (
    <AntdTree
      blockNode
      {...searchExpandKeysProps}
      {...treeProps}
      treeData={newTreeData}
      className={classNames(
        'fec-tree fec-tree-no-wrap',
        {
          'fec-tree-all-leaf': isAllLeaf,
        },
        treeProps?.className,
      )}
    />
  );

  if (!enableSearch) {
    return node;
  }

  return (
    <PageLayout
      direction="vertical"
      start={
        (enableSearch || title) && (
          <div className="flex flex-col gap-2 py-2">
            {(title || titleExtra) && (
              <div className="flex gap-2 px-2">
                <div className="flex-1">
                  <div className="truncate">{title}</div>
                  {titleDescription && <div className="text-desc">{titleDescription}</div>}
                </div>
                {titleExtra}
              </div>
            )}
            <div className="px-2">
              <Input placeholder="搜索" value={search} onChange={handleSearch} />
            </div>
          </div>
        )
      }
    >
      {node}
    </PageLayout>
  );
}

export { flatToTreeData, Tree };
export type { TreeProps };

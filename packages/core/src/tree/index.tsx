import { PageLayout } from '@fe-free/core';
import { useDebounce } from 'ahooks';
import type { TreeProps as AntdTreeProps } from 'antd';
import { Tree as AntdTree, Input } from 'antd';
import type { DataNode } from 'antd/es/tree';
import { useMemo, useState } from 'react';
import { flatToTreeData } from './helper';

interface TreeProps<T extends DataNode> extends AntdTreeProps<T> {
  enableSearch?: boolean;
}

function useHighLightTreeData({ treeData, search }) {
  return useMemo(() => {
    if (!search) {
      return treeData;
    }

    const loop = (data) => {
      return data.map((item) => {
        const strTitle = item.title as string;
        const index = strTitle.indexOf(search);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + search.length);
        const title =
          index > -1 ? (
            <span key={item.key}>
              {beforeStr}
              <span className="text-red-500">{search}</span>
              {afterStr}
            </span>
          ) : (
            <span key={item.key}>{strTitle}</span>
          );

        if (item.children) {
          return { ...item, title, children: loop(item.children) };
        }

        return {
          ...item,
          title,
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
      if (!nodes || nodes.length === 0) {
        return [];
      }

      return nodes
        .map((node) => {
          const children = node.children ? filterTree(node.children) : [];
          const isMatch = isNodeMatch(node);
          const hasMatchingChildren = children.length > 0;

          // 如果当前节点匹配或者有匹配的子节点，则保留该节点
          if (isMatch || hasMatchingChildren) {
            return {
              ...node,
              children: hasMatchingChildren ? children : undefined,
            };
          }

          return null;
        })
        .filter(Boolean); // 过滤掉null值
    };

    return filterTree(treeData);
  }, [treeData, search]);
}

function Tree<T extends DataNode>(props: TreeProps<T>) {
  const { enableSearch, treeData, ...rest } = props;
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, { wait: 300 });

  const filterTreeData = useFilterTreeData({ treeData, search: debouncedSearch });
  const highlightedTreeData = useHighLightTreeData({
    treeData: filterTreeData,
    search: debouncedSearch,
  });

  const node = <AntdTree {...rest} treeData={highlightedTreeData} />;

  if (!enableSearch) {
    return node;
  }

  return (
    <PageLayout
      direction="vertical"
      start={
        enableSearch && (
          <div className="px-2 pb-2">
            <Input.Search
              placeholder="搜索"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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

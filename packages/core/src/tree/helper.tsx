import type { DataNode } from 'antd/es/tree';

interface TreeData<T extends Record<string, any>> extends DataNode {
  originData: T;
}

function flatToTreeData<T extends Record<string, any>>({
  data,
  titleField,
  keyField,
  parentField,
  rootValue,
}: {
  data: T[];
  titleField: keyof T;
  keyField: keyof T;
  parentField: keyof T;
  rootValue: T[keyof T];
}): {
  treeData: TreeData<T>[];
  treeMap: Record<string, TreeData<T>>;
} {
  const treeMap: Record<string, TreeData<T>> = {};
  const treeData: TreeData<T>[] = [];

  // 构造 map
  data.forEach((item) => {
    treeMap[item[keyField]] = {
      title: item[titleField],
      // 保证 string
      key: item[keyField] + '',
      children: [],
      originData: item,
    };
  });

  // 构造父子关系
  data.forEach((item) => {
    // root 节点
    if (item[parentField] === rootValue) {
      treeData.push(treeMap[item[keyField]]);
    }

    treeMap[item[parentField]]?.children?.push(treeMap[item[keyField]]);
  });

  return {
    treeData,
    treeMap,
  };
}

export { flatToTreeData };

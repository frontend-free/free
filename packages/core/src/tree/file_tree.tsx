import type { DataNode } from 'antd/es/tree';
import type { TreeProps } from './tree';
import { Tree } from './tree';

interface FileTreeProps<D extends DataNode> extends TreeProps<D> {
  enableSearch?: boolean;
}

function FileTree<D extends DataNode>(props: FileTreeProps<D>) {
  return <Tree {...props} />;
}

export { FileTree };
export type { FileTreeProps };

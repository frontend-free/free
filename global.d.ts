declare module '*.scss' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  import type React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare global {
  interface Window {
    __routeTool_navigate: any;
    __routeTool_baseName: string;
  }
}

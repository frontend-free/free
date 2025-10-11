declare module '*.svg?react' {
  import type React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare global {
  interface Window {
    __routeTool_navigate: NavigateFunction | null;
    __routeTool_baseName: string;
  }
}

export {};

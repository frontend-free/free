import type React from 'react';

interface IconBaseProps extends React.HTMLAttributes<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  children?: React.ReactNode;
}

export type { IconComponentProps };

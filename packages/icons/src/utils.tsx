import React from 'react';
import type { IconComponentProps } from './types';

/**
 * 从 SVG 内容字符串中提取 viewBox
 */
function extractViewBox(svgContent: string): string {
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
  if (viewBoxMatch) {
    return viewBoxMatch[1];
  }
  return '0 0 1024 1024';
}

/**
 * 从 SVG 内容中提取内部内容（去除外层 svg 标签）
 */
function extractSvgContent(svgContent: string): string {
  // 移除开头的 <svg> 标签和结尾的 </svg> 标签
  let content = svgContent
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();

  // 将 fill="#xxx" 替换为 fill="currentColor"，以便支持主题色
  content = content.replace(/fill="[^"]*"/g, 'fill="currentColor"');

  return content;
}

/**
 * 创建图标组件
 * @param name 图标名称
 * @param svgContent SVG 内容字符串
 */
function createIcon(
  name: string,
  svgContent: string,
): React.ForwardRefExoticComponent<
  Omit<IconComponentProps, 'ref'> & React.RefAttributes<SVGSVGElement>
> {
  const viewBox = extractViewBox(svgContent);
  const innerContent = extractSvgContent(svgContent);

  const IconComponent = React.forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    const {
      size = '1em',
      spin = false,
      rotate,
      style,
      className,
      viewBox: propsViewBox,
      ...restProps
    } = props;

    const mergedStyle: React.CSSProperties = {
      display: 'inline-block',
      ...style,
      ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
      ...(spin
        ? {
            animation: 'anticon-spin 1s infinite linear',
          }
        : {}),
    };

    return (
      <svg
        viewBox={propsViewBox || viewBox}
        width={size}
        height={size}
        fill="currentColor"
        className={className}
        style={mergedStyle}
        ref={ref}
        {...restProps}
        dangerouslySetInnerHTML={{ __html: innerContent }}
      />
    );
  });

  IconComponent.displayName = name;

  return IconComponent as React.ForwardRefExoticComponent<
    Omit<IconComponentProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

export { createIcon };

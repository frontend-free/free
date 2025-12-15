import classNames from 'classnames';
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
  baseName: string,
  svgContent: string,
): React.ForwardRefExoticComponent<
  Omit<IconComponentProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> {
  const viewBox = extractViewBox(svgContent);
  const innerContent = extractSvgContent(svgContent);

  const IconComponent = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
    const {
      spin = false,
      rotate,
      style,
      className,
      viewBox: propsViewBox,
      onClick,
      tabIndex,
      ...restProps
    } = props;

    const prefixCls = 'anticon';
    const classString = classNames(
      'fec-icon',
      prefixCls,
      {
        [`${prefixCls}-${baseName}`]: !!baseName,
        [`${prefixCls}-spin`]: !!spin || baseName === 'loading',
      },
      className,
    );

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

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    return (
      <span
        role="img"
        aria-label={baseName}
        {...restProps}
        ref={ref}
        tabIndex={iconTabIndex}
        onClick={onClick}
        className={classString}
      >
        <svg
          viewBox={propsViewBox || viewBox}
          width={'1em'}
          height={'1em'}
          fill="currentColor"
          style={mergedStyle}
          {...restProps}
          dangerouslySetInnerHTML={{ __html: innerContent }}
        />
      </span>
    );
  });

  IconComponent.displayName = name;

  return IconComponent as React.ForwardRefExoticComponent<
    Omit<IconComponentProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
  >;
}

export { createIcon };

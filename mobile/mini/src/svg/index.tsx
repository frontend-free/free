import { Image } from '@tarojs/components';

interface SvgProps {
  icon: string;
  style?: React.CSSProperties;
}

const defaultStyle = {
  width: '1rem',
  height: '1rem',
};

function Svg({ style = defaultStyle, icon }: SvgProps) {
  return <Image style={style} src={icon} />;
}

export { Svg };

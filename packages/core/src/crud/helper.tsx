import { Tooltip } from 'antd';

function OperateBtn({
  title,
  icon,
  operateText,
  disabled,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  operateText?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  if (disabled) {
    if (operateText) {
      return <span className="cursor-not-allowed text-03">{operateText}</span>;
    } else {
      return (
        <Tooltip title={title}>
          <span className="cursor-not-allowed text-lg text-03">{icon}</span>
        </Tooltip>
      );
    }
  }

  if (operateText) {
    return (
      <span className="cursor-pointer text-primary" onClick={onClick}>
        {operateText}
      </span>
    );
  }

  return (
    <Tooltip title={title}>
      <span className="cursor-pointer text-lg text-primary" onClick={onClick}>
        {icon}
      </span>
    </Tooltip>
  );
}

export { OperateBtn };

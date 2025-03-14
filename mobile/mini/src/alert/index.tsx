import { View, Text } from '@tarojs/components';
import classNames from 'classnames';

function Alert({
  message,
  type,
}: {
  message: string;
  type: 'success' | 'info' | 'error' | 'warning';
}) {
  const map = {
    success: {
      borderColor: '#b7eb8f',
      backgroundColor: '#f6ffed',
    },
    info: {
      borderColor: '#91d5ff',
      backgroundColor: '#e6f7ff',
    },
    error: {
      borderColor: '#f5222d',
      backgroundColor: '#fff1f0',
    },
    warning: {
      borderColor: '#fadb14',
      backgroundColor: '#fffbe6',
    },
  };
  return (
    <View
      className={classNames(' p-2 border border-solid rounded')}
      style={{
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: map[type].borderColor,
        backgroundColor: map[type].backgroundColor,
      }}
    >
      <Text>{message}</Text>
    </View>
  );
}

export { Alert };

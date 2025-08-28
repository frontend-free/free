import { useGlobalRequest } from '@fe-free/core';
import { useRequest } from 'ahooks';

const meta = {
  title: '@fe-free/core/ahooks',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
};

export default meta;

const handleError = (event) => {
  console.log('global error', event);
  alert('global error');
};

window.addEventListener('error', handleError);
window.addEventListener('unhandledrejection', handleError);

export const UseGlobalRequest = () => {
  const { data, loading, error, run } = useGlobalRequest(
    async () => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject('错误啦');
        }, 1000);
      });
    },
    {
      manual: true,
    },
  );

  return (
    <div>
      <div>useGlobalRequest 会抛出全局错误</div>
      <button onClick={run}>run</button>

      <div>data: {data}</div>
      <div>loading: {loading ? 'true' : 'false'}</div>
      <div>error: {error}</div>
    </div>
  );
};

export const UseRequest = () => {
  const { data, loading, error, run } = useRequest(
    async () => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject('错误啦');
        }, 1000);
      });
    },
    {
      manual: true,
    },
  );

  return (
    <div>
      <div>ahooks useRequest</div>
      <button onClick={run}>run</button>
      <div>data: {data}</div>
      <div>loading: {loading ? 'true' : 'false'}</div>
      <div>error: {error}</div>
    </div>
  );
};

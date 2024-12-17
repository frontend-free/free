import { Organizer } from '@fe-free/x6';
import { Demo } from './demo';

export default {
  title: '@fe-free/x6/Organizer',
  component: Organizer,
  tags: ['autodocs'],
};

export const Default = () => {
  return (
    <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}>
      <Demo />
    </div>
  );
};

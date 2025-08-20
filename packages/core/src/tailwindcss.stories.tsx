export default {
  title: '@fe-free/core/tailwindcss',
  tags: ['autodocs'],
};

export const Default = () => {
  return (
    <div>
      <div>@fe-free/core 扩展的</div>
      <div className="flex flex-row gap-2">
        <span className="text-primary">text-primary</span>
        <span className="text-secondary">text-secondary</span>
        <span className="text-desc">text-desc</span>
      </div>
      <div>
        <div className="c-border-bottom">c-border-bottom</div>
        <div className="c-border-top">c-border-top</div>
        <div className="c-border-left">c-border-left</div>
        <div className="c-border-right">c-border-right</div>
        <div className="c-bg">c-bg</div>
        <div className="c-bg-hover">c-bg-hover</div>
      </div>
    </div>
  );
};

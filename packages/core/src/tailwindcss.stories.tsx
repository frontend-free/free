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
        <span className="text-price">text-price</span>
      </div>
    </div>
  );
};

export default {
  title: '@fe-free/core/tailwindcss',
  tags: ['autodocs'],
};

export const Default = () => {
  return (
    <div>
      <div>@fe-free/core 扩展的 </div>
      <h1>tailwindcss</h1>
      <h2>textColor</h2>
      <div>
        <div className="bg-black px-2 text-00">text-00</div>
        <div className="text-01">text-01</div>
        <div className="text-02">text-02</div>
        <div className="text-03">text-03</div>
        <div className="text-04">text-04</div>
      </div>
      <h2>borderColor</h2>
      <div className="space-y-2">
        <div className="border border-solid border-01">border-01</div>
        <div className="border border-solid border-02">border-02</div>
        <div className="border border-solid border-03">border-03</div>
      </div>
      <h2>backgroundColor</h2>
      <div>
        <div className="bg-00">bg-00</div>
        <div className="bg-005">bg-005</div>
        <div className="bg-01">bg-01</div>
        <div className="bg-02">bg-02</div>
        <div className="bg-03">bg-03</div>
      </div>
      <h2>colors</h2>
      <div>
        <div className="bg-primary">bg-primary</div>
      </div>
      <h2>colors - themeColor</h2>
      <div>
        <div className="bg-theme09">theme09</div>
        <div className="bg-theme08">theme08</div>
        <div className="bg-theme05">theme05</div>
        <div className="bg-theme03">theme03</div>
        <div className="bg-theme02">theme02</div>
      </div>
      <h2>colors - redColor</h2>
      <div>
        <div className="bg-red09">red09</div>
        <div className="bg-red08">red08</div>
        <div className="bg-red05">red05</div>
        <div className="bg-red03">red03</div>
      </div>
      <h2>colors - greenColor</h2>
      <div>
        <div className="bg-green09">green09</div>
        <div className="bg-green08">green08</div>
        <div className="bg-green05">green05</div>
        <div className="bg-green03">green03</div>
      </div>
      <h2>colors - yellowColor</h2>
      <div>
        <div className="bg-yellow09">yellow09</div>
        <div className="bg-yellow08">yellow08</div>
        <div className="bg-yellow05">yellow05</div>
        <div className="bg-yellow03">yellow03</div>
      </div>
      <h1>className</h1>
      <div>
        <div className="border-b border-01">border-b border-01</div>
        <div className="border-t border-01">border-t border-01</div>
        <div className="border-l border-01">border-l border-01</div>
        <div className="border-r border-01">border-r border-01</div>
        <div className="fec-bg">fec-bg</div>
        <div className="fec-bg-hover">fec-bg-hover</div>
      </div>
    </div>
  );
};

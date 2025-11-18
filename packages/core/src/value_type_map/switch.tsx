import {
  ProFormSwitchNumber,
  ProFormSwitchOptions,
  SwitchNumber,
  SwitchOptions,
} from '../form/pro_form_switch';

const switchNumberRender = {
  render: (text) => {
    if (text === undefined || text === null) return <div>-</div>;

    return <SwitchNumber value={text} />;
  },
  renderFormItem: (_, props) => {
    return <ProFormSwitchNumber {...props} />;
  },
};

const switchOptionsRender = {
  render: (text, props) => {
    console.log('text', text, props.fieldProps);
    if (text === undefined || text === null) return <div>-</div>;

    return <SwitchOptions value={text} {...props.fieldProps} />;
  },
  renderFormItem: (_, props) => {
    return <ProFormSwitchOptions {...props} />;
  },
};

export { switchNumberRender, switchOptionsRender };

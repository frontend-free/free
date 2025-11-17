const themeVariables = {
  color: {
    primary: '#0374e9', // 主题色

    // 目前是主题蓝
    theme09: '#0368d2', // 加深 hover
    theme08: '#0374e9', // 主要
    theme05: '#a2cbf7', // 次要
    theme03: '#e6f1fd', // 背景
    theme02: '#f0f7fe',

    red09: '#e64547', // 加深 hover
    red08: '#ff4d4f', // 主要
    red05: '#ffb8b9', // 次要
    red03: '#ffeded', // 背景

    green09: '#01a468', // 加深 hover
    green08: '#01b673', // 主要
    green05: '#9be5c8', // 次要
    green03: '#ddf9ec', // 背景

    yellow09: '#bf7a05', // 加深 hover
    yellow08: '#faad14', // 主要
    yellow05: '#eecf9b', // 次要
    yellow03: '#f6e7cd', // 背景
  },
  textColor: {
    '01': '#15191e', // 主要
    '02': '#444444', // 次要
    '03': '#777777', // 描述
    '04': '#94999f', // placeholder
  },
  borderColor: {
    '01': '#e2e7f0', // 主要
    '02': '#d5dde9', // 表单
    '03': '#c0c7d2',
  },
  backgroundColor: {
    '01': '#f1f3f5', // 主要
    '02': '#ececec', // 加深 hover
    '03': '#d9d9d9', // disabled
    '04': '#c0c0c0',
  },
} as const;

export { themeVariables };

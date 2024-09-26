import { Typography } from 'antd';

function render(text) {
  let jsonText = text;

  if (!text) {
    return <div>-</div>;
  }

  try {
    jsonText = JSON.stringify(JSON.parse(text), null, 2);
  } catch (e) {
    console.error(e, text);
  }

  return (
    <Typography.Text
      className="block max-w-full overflow-hidden"
      ellipsis={{
        tooltip: {
          title: (
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
              }}
            >
              {jsonText}
            </pre>
          ),
        },
      }}
    >
      {text}
    </Typography.Text>
  );
}

const jsonRender = {
  render,
  renderFormItem: () => <></>,
};

export { jsonRender };

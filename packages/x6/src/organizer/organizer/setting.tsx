import type { Node } from '@antv/x6';
import { Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { useCallback } from 'react';

function SettingHeader({ node, onClose }: { node: Node; onClose: () => void }) {
  const { data } = node;
  return (
    <div className="p-2 flex flex-col gap-2 border-b border-0 border-slate-100 border-solid">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          {data.icon && (
            <div
              className="w-[24px] h-[24px] rounded-md flex items-center justify-center"
              style={{ background: data.iconBg }}
            >
              <span className="text-white">{data.icon}</span>
            </div>
          )}
          <div className="flex-1 truncate">{data.title}</div>
        </div>
        <div>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
      </div>
      <div>
        <Input placeholder="添加描述..." variant="borderless" className="px-0" />
      </div>
    </div>
  );
}

const emptyArray = [];
function SettingForm({ node }: { node: Node }) {
  const { data } = node;

  const handleValuesChange = useCallback(
    (_, allValues: any) => {
      data.allValues = allValues;
    },
    [data]
  );

  return (
    <div className="p-2">
      <BetaSchemaForm
        columns={data.columns || emptyArray}
        submitter={false}
        initialValues={data.values}
        onValuesChange={handleValuesChange}
        autoFocusFirstInput={false}
      />
    </div>
  );
}

function Setting({ node, onClose }: { node: Node; onClose: () => void }) {
  return (
    <div className="w-[350px] bg-white rounded-lg h-full box-shadow-lg">
      <SettingHeader node={node} onClose={onClose} />
      <SettingForm node={node} />
    </div>
  );
}

export { Setting };

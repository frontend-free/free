import { useTranslation } from 'react-i18next';

function Tip() {
  const { t } = useTranslation();
  return (
    <div className="test-xs text-01">
      {t(
        '@fe-free/ai.sender.aiGeneratedDisclaimer',
        '内容由 AI 生成，无法确保信息的真实准确，仅供参考',
      )}
    </div>
  );
}

export { Tip };

async function recordAudioOfPCM({ onAudio }: { onAudio: (data: ArrayBufferLike) => void }) {
  // --- 初始化音频 ---
  const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const audioContext = new AudioContext({ sampleRate: 16000 });
  const sourceNode = audioContext.createMediaStreamSource(micStream);
  // ScriptProcessorNode（4096 是稳定 buffer）
  const processorNode = audioContext.createScriptProcessor(4096, 1, 1);

  processorNode.onaudioprocess = function (event) {
    const float32Data = event.inputBuffer.getChannelData(0); // float32

    // === 转成 Int16 PCM ===
    const pcm16 = new Int16Array(float32Data.length);
    for (let i = 0; i < float32Data.length; i++) {
      const s = Math.max(-1, Math.min(1, float32Data[i]));
      pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }

    onAudio(pcm16.buffer);
  };

  sourceNode.connect(processorNode);
  processorNode.connect(audioContext.destination);

  return () => {
    if (processorNode) processorNode.disconnect();
    if (sourceNode) sourceNode.disconnect();
    if (audioContext) audioContext.close();
    if (micStream) micStream.getTracks().forEach((track) => track.stop());
  };
}

export { recordAudioOfPCM };

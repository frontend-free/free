function getRecordAudioOfPCM() {
  let processorNode: ScriptProcessorNode | null = null;
  let sourceNode: MediaStreamAudioSourceNode | null = null;
  let audioContext: AudioContext | null = null;
  let micStream: MediaStream | null = null;

  let data: ArrayBufferLike[] = [];

  async function start({
    onAudio,
    onError,
  }: {
    onAudio: (data: ArrayBufferLike) => void;
    onError?: (error: Error) => void;
  }): Promise<void> {
    try {
      // --- 初始化音频 ---
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContext = new AudioContext({ sampleRate: 16000 });
      sourceNode = audioContext.createMediaStreamSource(micStream);
      // ScriptProcessorNode（4096 是稳定 buffer）
      processorNode = audioContext.createScriptProcessor(4096, 1, 1);

      data = [];

      processorNode.onaudioprocess = function (event) {
        const float32Data = event.inputBuffer.getChannelData(0); // float32

        // === 转成 Int16 PCM ===
        const pcm16 = new Int16Array(float32Data.length);
        for (let i = 0; i < float32Data.length; i++) {
          const s = Math.max(-1, Math.min(1, float32Data[i]));
          pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
        }

        data.push(pcm16.buffer);

        onAudio(pcm16.buffer);
      };

      sourceNode.connect(processorNode);
      processorNode.connect(audioContext.destination);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        onError?.(new Error('请允许麦克风权限'));
      } else if (err instanceof DOMException && err.name === 'NotFoundError') {
        onError?.(new Error('未找到麦克风设备'));
      } else if (err instanceof DOMException && err.name === 'NotReadableError') {
        onError?.(new Error('麦克风被其他应用占用'));
      } else {
        onError?.(new Error('启动录音失败'));
      }

      throw err;
    }
  }

  async function stop(): Promise<{ data: ArrayBufferLike[] }> {
    if (processorNode) processorNode.disconnect();
    if (sourceNode) sourceNode.disconnect();
    if (audioContext) audioContext.close();
    if (micStream) micStream.getTracks().forEach((track) => track.stop());

    const result = data;
    data = [];

    return { data: result };
  }

  return {
    start,
    stop,
  };
}

function getRecordAudioOfBlob() {
  let mediaRecorder: MediaRecorder | null = null;
  let micStream: MediaStream | null = null;
  let chunks: Blob[] = [];

  async function start({
    onAudio,
    onError,
    mimeType = 'audio/webm',
  }: {
    onAudio?: (blob: Blob) => void;
    onError?: (error: Error) => void;
    mimeType?: string;
  }): Promise<void> {
    try {
      // 获取麦克风权限
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // 检查浏览器是否支持指定的 MIME 类型
      let finalMimeType = mimeType;
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        // 如果不支持，尝试使用默认类型
        finalMimeType = '';
        console.warn(`不支持的 MIME 类型: ${mimeType}，使用默认类型`);
      }

      // 创建 MediaRecorder 实例
      mediaRecorder = new MediaRecorder(micStream, {
        mimeType: finalMimeType || undefined,
      });

      chunks = [];

      // 监听数据可用事件
      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunks.push(event.data);
          onAudio?.(event.data);
        }
      };

      // 监听错误事件
      mediaRecorder.onerror = () => {
        const error = new Error('MediaRecorder 录音错误');
        onError?.(error);
      };

      // 开始录音
      mediaRecorder.start(100); // 每 100ms 触发一次 dataavailable 事件
    } catch (err) {
      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        onError?.(new Error('请允许麦克风权限'));
      } else if (err instanceof DOMException && err.name === 'NotFoundError') {
        onError?.(new Error('未找到麦克风设备'));
      } else if (err instanceof DOMException && err.name === 'NotReadableError') {
        onError?.(new Error('麦克风被其他应用占用'));
      } else {
        onError?.(new Error('启动录音失败'));
      }

      throw err;
    }
  }

  async function stop(): Promise<{ data: Blob; base64: string }> {
    return new Promise((resolve, reject) => {
      if (!mediaRecorder) {
        reject(new Error('MediaRecorder 未初始化'));
        return;
      }

      function doStop() {
        const blob = new Blob(chunks, { type: mediaRecorder?.mimeType || 'audio/webm' });
        chunks = [];

        // 停止所有轨道
        if (micStream) {
          micStream.getTracks().forEach((track) => track.stop());
        }

        // 将 Blob 转换为 base64
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          resolve({ data: blob, base64: base64String });
        };
        reader.onerror = () => {
          reject(new Error('转换为 base64 失败'));
        };
        reader.readAsDataURL(blob);
      }

      // 监听停止事件
      mediaRecorder.onstop = () => {
        doStop();
      };

      // 如果正在录音，则停止
      if (mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
      } else {
        doStop();
      }
    });
  }

  return {
    start,
    stop,
  };
}

export { getRecordAudioOfBlob, getRecordAudioOfPCM };

/**
 * Web Audio API audio manager.
 * Uses AudioContext so the platform's MediaRecorder captures both tracks.
 * Plain <audio> elements are NOT captured by the recorder — this hook is required.
 */
import { useEffect } from 'react';
import { asset } from '@/lib/assetUrl';

interface AudioOptions {
  voicePath?: string;
  musicPath?: string;
  musicVolume?: number; // 0–1, default 0.18
  startDelay?: number;  // seconds before playback begins, default 0.5
}

export function useAudio({
  voicePath = asset('audio/voiceover.mp3'),
  musicPath  = asset('audio/bg_music.mp3'),
  musicVolume = 0.18,
  startDelay  = 0.5,
}: AudioOptions = {}) {
  useEffect(() => {
    let ctx: AudioContext | null = null;
    let voiceSource: AudioBufferSourceNode | null = null;
    let musicSource: AudioBufferSourceNode | null = null;
    let cancelled = false;

    async function start() {
      ctx = new AudioContext();

      // Fetch + decode both tracks in parallel
      const [voiceBuf, musicBuf] = await Promise.all([
        fetch(voicePath).then(r => r.arrayBuffer()).then(b => ctx!.decodeAudioData(b)),
        fetch(musicPath).then(r => r.arrayBuffer()).then(b => ctx!.decodeAudioData(b)),
      ]);

      if (cancelled || !ctx) return;

      const when = ctx.currentTime + startDelay;

      // Voiceover — straight to destination
      voiceSource = ctx.createBufferSource();
      voiceSource.buffer = voiceBuf;
      voiceSource.connect(ctx.destination);
      voiceSource.start(when);

      // Background music — through a GainNode
      const musicGain = ctx.createGain();
      musicGain.gain.value = musicVolume;
      musicGain.connect(ctx.destination);

      musicSource = ctx.createBufferSource();
      musicSource.buffer = musicBuf;
      musicSource.loop = true;
      musicSource.connect(musicGain);
      musicSource.start(when);
    }

    start().catch(console.error);

    return () => {
      cancelled = true;
      try { voiceSource?.stop(); } catch (_) {}
      try { musicSource?.stop(); } catch (_) {}
      ctx?.close();
    };
  }, []); // run once on mount
}

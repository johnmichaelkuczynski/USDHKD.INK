import { useEffect, useRef } from 'react';
import { asset } from '@/lib/assetUrl';
import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';

import IntroScene       from './scenes/IntroScene';
import PegScene         from './scenes/PegScene';
import AppDashboardScene from './scenes/AppDashboardScene';
import ModelsScene      from './scenes/ModelsScene';
import MonteCarloScene  from './scenes/MonteCarloScene';
import EquilibriumScene from './scenes/EquilibriumScene';
import BacktestScene    from './scenes/BacktestScene';
import CTAScene         from './scenes/CTAScene';

// Scene durations in milliseconds — total ≈ 90 s
const SCENE_DURATIONS = {
  intro:       10000,  // 10s – HK skyline + "information" line
  peg:          8000,  //  8s – convertibility band context
  dashboard:   12000,  // 12s – live app screenshot + callouts
  models:      12000,  // 12s – 13 model list animation
  montecarlo:   8000,  //  8s – 25k paths + horizon cards
  equilibrium: 10000,  // 10s – rate-diff overlay stats
  backtest:    12000,  // 12s – validation metrics
  cta:         18000,  // 18s – logo + URL + silence to fade
};

export default function VideoTemplate() {
  const voiceRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);

  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
    loop: false,
  });

  // Auto-start audio on first render (video-js recorder captures audio elements)
  useEffect(() => {
    const tryPlay = () => {
      voiceRef.current?.play().catch(() => {});
      if (musicRef.current) {
        musicRef.current.volume = 0.18;
        musicRef.current.play().catch(() => {});
      }
    };
    // small delay to let the recorder attach before audio starts
    const t = setTimeout(tryPlay, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-[#050c14]">
      {/* ── Audio tracks ── */}
      <audio ref={voiceRef} src={asset('audio/voiceover.mp3')} preload="auto" />
      <audio ref={musicRef} src={asset('audio/bg_music.mp3')}  preload="auto" loop />

      {/* ── Scenes ── */}
      <AnimatePresence mode="wait">
        {currentScene === 0 && <IntroScene        key="intro" />}
        {currentScene === 1 && <PegScene          key="peg" />}
        {currentScene === 2 && <AppDashboardScene key="dashboard" />}
        {currentScene === 3 && <ModelsScene       key="models" />}
        {currentScene === 4 && <MonteCarloScene   key="montecarlo" />}
        {currentScene === 5 && <EquilibriumScene  key="equilibrium" />}
        {currentScene === 6 && <BacktestScene     key="backtest" />}
        {currentScene === 7 && <CTAScene          key="cta" />}
      </AnimatePresence>
    </div>
  );
}

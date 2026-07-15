import { motion } from 'framer-motion';
import { asset } from '@/lib/assetUrl';

export default function IntroScene() {
  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}>
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src={asset('video/clip_hk_skyline.mp4')} type="video/mp4" />
      </video>
      <div className="scene-overlay" style={{ background: 'linear-gradient(to bottom, rgba(2,8,16,0.3) 0%, rgba(2,8,16,0.2) 40%, rgba(2,8,16,0.85) 100%)' }} />
      <div className="scanline" />

      <div className="scene-content px-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            <div className="teal-line" />
            <span className="ticker text-sm tracking-[0.3em] uppercase text-[var(--color-primary)]">
              FX Analytics
            </span>
            <div className="teal-line" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            style={{ fontFamily: 'var(--font-display)', fontSize: '3.6rem', fontWeight: 700, lineHeight: 1.08, color: '#ffffff', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            In FX markets, the difference<br />
            between a position and an edge<br />
            <span style={{ color: 'var(--color-primary)' }}>is information.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div className="flex justify-center mt-10"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 1.8, duration: 0.7, ease: 'circOut' }}>
            <div style={{ width: '120px', height: '1px', background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)' }} />
          </motion.div>

          {/* Sub */}
          <motion.p
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginTop: '1.5rem', letterSpacing: '0.01em' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}>
            USD/HKD · Hong Kong Dollar · HKMA Convertibility Band
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

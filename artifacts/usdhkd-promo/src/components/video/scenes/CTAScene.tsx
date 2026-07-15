import { motion } from 'framer-motion';
import { useSceneTimer } from '@/lib/video';
import { useState } from 'react';

export default function CTAScene() {
  const [showUrl, setShowUrl] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useSceneTimer([
    { time: 2000, callback: () => setShowTagline(true) },
    { time: 5000, callback: () => setShowUrl(true) },
  ]);

  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      style={{ background: 'var(--color-bg-dark)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}>

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,170,0.08) 0%, transparent 70%)'
      }} />

      {/* Thin horizontal rule */}
      <motion.div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(0,212,170,0.06)', zIndex: 1 }} />

      <div className="scene-content z-10" style={{ position: 'relative', gap: '0' }}>

        {/* Logo wordmark */}
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '5.5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
            <span style={{ color: '#ffffff' }}>USD</span>
            <span style={{ color: 'var(--color-primary)' }}>/HKD</span>
            <span style={{ color: '#ffffff' }}> Edge</span>
          </div>

          {/* Animated underline */}
          <motion.div className="flex justify-center mt-4"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.9, ease: 'circOut' }}>
            <div style={{ width: '300px', height: '2px', background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)', boxShadow: 'var(--glow-teal)' }} />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        {showTagline && (
          <motion.p
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.35rem', color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: '2rem', letterSpacing: '0.02em' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            13 models. 25,000 paths. Live data. Full backtests.
          </motion.p>
        )}

        {/* URL */}
        {showUrl && (
          <motion.div className="text-center mt-10"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(0,212,170,0.10)',
              border: '1px solid rgba(0,212,170,0.35)',
              borderRadius: '8px',
              padding: '14px 36px',
              boxShadow: 'var(--glow-teal)',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: 'var(--color-primary)', letterSpacing: '0.06em' }}>
                usdhkdxyz.replit.app
              </span>
            </div>

            <motion.p style={{ marginTop: '1.2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              Try it now · Free · No signup required
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

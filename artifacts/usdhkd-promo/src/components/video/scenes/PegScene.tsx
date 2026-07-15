import { motion } from 'framer-motion';
import { asset } from '@/lib/assetUrl';

export default function PegScene() {
  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}>
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src={asset('video/clip_intro.mp4')} type="video/mp4" />
      </video>
      <div className="scene-overlay" style={{ background: 'rgba(2,8,16,0.72)' }} />

      <div className="scene-content px-20">
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-8">

          {/* Band visualization */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center justify-center gap-6 mb-2">
            <div className="stat-card flex items-center gap-8 px-10 py-5">
              {['7.75', '7.80', '7.85'].map((val, i) => (
                <div key={val} className="flex flex-col items-center gap-1">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 700, color: i === 1 ? 'var(--color-primary)' : 'rgba(255,255,255,0.4)' }}>
                    {val}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {i === 0 ? 'Floor' : i === 1 ? 'Mid' : 'Ceiling'}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main text */}
          {[
            { text: 'USD/HKD operates within one of the most', delay: 0.5 },
            { text: 'tightly managed currency regimes on Earth.', delay: 0.75 },
          ].map((line, i) => (
            <motion.p key={i}
              style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 600, color: '#ffffff', textAlign: 'center', lineHeight: 1.15 }}
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              {line.text}
            </motion.p>
          ))}

          <motion.p
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center', lineHeight: 1.5 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}>
            The HKMA convertibility band creates structure.<br />
            <span style={{ color: 'var(--color-primary)' }}>Within that structure lies opportunity.</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

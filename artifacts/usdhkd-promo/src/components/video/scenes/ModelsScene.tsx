import { motion } from 'framer-motion';

const MODELS = [
  'BS · Realized Volatility',
  'BS · EWMA Volatility',
  'BS · Parkinson Range',
  'Heston · Stochastic Vol',
  'SABR · Calibrated',
  'Merton · Jump Diffusion',
  'Kou · Double Exponential Jumps',
  'CGMY · Infinite Activity Lévy',
  'VG · Variance Gamma',
  'NIG · Normal Inverse Gaussian',
  'Regime-Switching GARCH',
  'Rough Fractional Vol (rBergomi)',
  'Binomial Tree',
];

export default function ModelsScene() {
  const left  = MODELS.slice(0, 7);
  const right = MODELS.slice(7);

  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      style={{ background: 'var(--color-bg-dark)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}>

      {/* subtle grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,170,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />

      <div className="scene-content px-16 z-10" style={{ position: 'relative' }}>
        <div className="w-full max-w-6xl mx-auto">

          {/* Header */}
          <motion.div className="text-center mb-10"
            initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="teal-line" style={{ width: '40px' }} />
              <span className="ticker text-sm tracking-[0.25em]">Quantitative Engine</span>
              <div className="teal-line" style={{ width: '40px' }} />
            </div>
            <motion.div
              style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <span style={{ color: 'var(--color-primary)' }}>13</span> Pricing Models
            </motion.div>
            <motion.p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', marginTop: '0.5rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              25,000 Monte Carlo paths per model · All horizons
            </motion.p>
          </motion.div>

          {/* Two-column model list */}
          <div className="flex gap-6 justify-center">
            {[left, right].map((col, ci) => (
              <div key={ci} style={{ flex: 1, maxWidth: '380px' }}>
                {col.map((m, mi) => (
                  <motion.div key={m} className="model-item"
                    initial={{ opacity: 0, x: ci === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + (ci * col.length + mi) * 0.07, duration: 0.5, ease: 'circOut' }}>
                    <div className="dot" />
                    {m}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

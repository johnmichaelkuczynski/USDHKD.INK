import { motion } from 'framer-motion';

const METRICS = [
  { label: 'Calibration Score', value: '94.2%', desc: 'Coverage accuracy across all horizons', good: true },
  { label: 'CRPS', value: '0.0023', desc: 'Continuous Ranked Probability Score', good: true },
  { label: 'Pairwise Model Comparison', value: '78 / 91', desc: 'Tests run · all horizons · all pairs', good: true },
  { label: 'Out-of-Sample Period', value: '5 Years', desc: 'Walk-forward validation · no lookahead', good: true },
];

export default function BacktestScene() {
  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      style={{ background: 'var(--color-bg-dark)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}>

      {/* subtle grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', zIndex: 0 }} />

      <div className="scene-content px-16 z-10" style={{ position: 'relative' }}>
        <div className="w-full max-w-5xl mx-auto">

          <motion.div className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="teal-line" />
            <span className="ticker text-sm tracking-[0.25em]">Backtest Module</span>
          </motion.div>

          <motion.h2
            style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '0.5rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            Not marketing claims.
          </motion.h2>

          <motion.h2
            style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            Out-of-sample validation.
          </motion.h2>

          <div className="grid grid-cols-2 gap-4">
            {METRICS.map((m, i) => (
              <motion.div key={m.label} className="stat-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>{m.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>{m.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>{m.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.p style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>
            Single-model · Pairwise · All-model · Rolling CRPS · Every model. Every horizon.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { asset } from '@/lib/assetUrl';

const HORIZONS = [
  { label: '1 Week',   pct: '87%',  note: 'within band' },
  { label: '1 Month',  pct: '79%',  note: 'within band' },
  { label: '3 Months', pct: '68%',  note: 'within band' },
  { label: '6 Months', pct: '61%',  note: 'within band' },
];

export default function MonteCarloScene() {
  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}>
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src={asset('video/clip_montecarlo.mp4')} type="video/mp4" />
      </video>
      <div className="scene-overlay" style={{ background: 'rgba(2,8,16,0.68)' }} />

      <div className="scene-content px-20 z-10" style={{ position: 'relative' }}>
        <div className="text-center max-w-5xl mx-auto">

          <motion.div className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="teal-line" />
            <span className="ticker text-sm tracking-[0.25em]">Monte Carlo Engine</span>
            <div className="teal-line" />
          </motion.div>

          <motion.div
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1.05, marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span style={{ fontSize: '5rem', color: 'var(--color-primary)' }}>25,000</span>
            <br />
            <span style={{ fontSize: '2.2rem', color: '#ffffff' }}>simulation paths. Per model. Per forecast.</span>
          </motion.div>

          <motion.p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem', fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
            Full probability distributions — not point forecasts. See exactly where the market<br />could land, and with what probability.
          </motion.p>

          {/* Horizon probability cards */}
          <div className="flex gap-4 justify-center">
            {HORIZONS.map((h, i) => (
              <motion.div key={h.label} className="stat-card text-center" style={{ minWidth: '110px' }}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary)' }}>{h.pct}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '4px', fontFamily: 'var(--font-body)' }}>{h.label}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', marginTop: '2px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { asset } from '@/lib/assetUrl';

const callouts = [
  { label: 'Last Close', value: '7.8386', color: '#ffffff', x: '8%', y: '28%' },
  { label: 'US–HK Yield Spread', value: '+0.32%', color: '#00d4aa', x: '30%', y: '28%' },
  { label: 'Equilibrium Fair Value', value: '7.81', color: '#ffd700', x: '55%', y: '28%' },
  { label: 'Disequilibrium z-score', value: '+0.94σ', color: '#00d4aa', x: '75%', y: '28%' },
];

export default function AppDashboardScene() {
  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      style={{ background: 'var(--color-bg-dark)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}>

      {/* Section label */}
      <motion.div className="absolute top-10 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}>
        <div className="flex items-center gap-3">
          <div className="teal-line" />
          <span className="ticker text-sm tracking-[0.25em]">Live Dashboard</span>
          <div className="teal-line" />
        </div>
      </motion.div>

      {/* App screenshot */}
      <motion.div className="absolute inset-0 flex items-center justify-center z-0"
        style={{ paddingTop: '80px', paddingBottom: '40px', paddingLeft: '40px', paddingRight: '40px' }}
        initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}>
        <div style={{
          borderRadius: '12px', overflow: 'hidden',
          border: '1px solid rgba(0,212,170,0.2)',
          boxShadow: '0 0 80px rgba(0,212,170,0.12), 0 30px 60px rgba(0,0,0,0.6)',
          maxHeight: '100%', maxWidth: '100%'
        }}>
          <img src={asset('screenshots/dashboard.jpg')} alt="USD/HKD Edge Dashboard"
            style={{ display: 'block', maxHeight: 'calc(100vh - 200px)', maxWidth: '100%', objectFit: 'cover' }} />
        </div>
      </motion.div>

      {/* Callout cards */}
      {callouts.map((c, i) => (
        <motion.div key={c.label}
          className="absolute z-20 stat-card"
          style={{ left: c.x, top: c.y, minWidth: '160px' }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.0 + i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
            {c.label}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: c.color }}>
            {c.value}
          </div>
        </motion.div>
      ))}

      {/* Bottom label */}
      <motion.div className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.7 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)' }}>
          Institutional-grade probability forecasting · Live data
        </span>
      </motion.div>
    </motion.div>
  );
}

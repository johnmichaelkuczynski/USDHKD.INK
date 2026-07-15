import { motion } from 'framer-motion';
import { asset } from '@/lib/assetUrl';

export default function EquilibriumScene() {
  return (
    <motion.div className="w-full h-screen relative overflow-hidden"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}>
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src={asset('video/clip_trading_room.mp4')} type="video/mp4" />
      </video>
      <div className="scene-overlay" style={{ background: 'rgba(2,8,16,0.70)' }} />

      <div className="scene-content px-20 z-10" style={{ position: 'relative' }}>
        <div className="w-full max-w-5xl mx-auto">

          <motion.div className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="teal-line" />
            <span className="ticker text-sm tracking-[0.25em]">Rate-Differential Equilibrium Overlay</span>
          </motion.div>

          <motion.h2
            style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.15, marginBottom: '2rem' }}
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            Fair-value drift from the<br />
            <span style={{ color: 'var(--color-primary)' }}>US–HK yield spread.</span>
          </motion.h2>

          {/* Stats row */}
          <div className="flex gap-5 flex-wrap">
            {[
              { label: 'Equilibrium Fair Value', value: '7.81', sub: 'α=7.83  β=−0.06', color: '#ffd700' },
              { label: 'US–HK 3m Yield Spread', value: '+0.32%', sub: 'Real-time differential', color: '#ffffff' },
              { label: 'Disequilibrium z-Score', value: '+0.94σ', sub: 'Near equilibrium', color: 'var(--color-primary)' },
              { label: 'Mean-Reversion Speed', value: 'λ = 0.21', sub: 'bp/σ per day', color: 'var(--color-text-secondary)' },
            ].map((s, i) => (
              <motion.div key={s.label} className="stat-card" style={{ flex: '1 1 180px' }}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, color: s.color, marginBottom: '4px' }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>

          <motion.p style={{ marginTop: '2rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
            Know not just where the market might go — but whether it's cheap or rich.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

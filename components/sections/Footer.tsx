'use client';

export default function Footer() {
  return (
    <footer className="border-t py-10 px-4 sm:px-6" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#06B6D4', boxShadow: '0 0 8px #06B6D4' }} />
          <span className="font-display font-black text-white tracking-tight">CLARITY CUTS</span>
          <span className="font-mono text-xs text-zinc-600">by Charan</span>
        </div>
        <p className="font-mono text-xs text-zinc-600">
          © 2026 Clarity Cuts. AI Video & Photo Architecture.
        </p>
        <div className="flex items-center gap-6">
          {['Instagram', 'YouTube', 'LinkedIn'].map((s) => (
            <a key={s} href="#" className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

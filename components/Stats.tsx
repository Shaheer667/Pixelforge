const stats = [
  { k: '140+', v: 'Projects shipped' },
  { k: '32', v: 'Active clients' },
  { k: '4.96', v: 'Avg. CSAT (out of 5)' },
  { k: '11', v: 'Awwwards & FWA' },
];

export default function Stats() {
  return (
    <section id="work" className="relative bg-ink text-cream py-28 lg:py-36 overflow-hidden">
      <div className="absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full ember-grad opacity-20 blur-3xl" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <span className="badge text-sun mb-6">✺ Receipts</span>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mt-6">
              Numbers we are
              <br />
              <span className="stroke-text-cream">quietly proud</span> of.
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-cream/70 leading-relaxed self-end">
            We measure success in shipped product, repeat clients and the
            occasional 3 a.m. screenshot from a founder who can&apos;t stop
            scrolling their new homepage.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10 rounded-[28px] overflow-hidden">
          {stats.map((s, i) => (
            <div key={s.v} className="bg-ink p-8 lg:p-10 relative group">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-sun mb-6">
                {String(i + 1).padStart(2, '0')} ·
              </div>
              <div className="font-display text-6xl lg:text-7xl font-black tracking-tight text-cream group-hover:text-ember transition">
                {s.k}
              </div>
              <div className="text-cream/60 text-sm mt-3">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    n: '01',
    title: 'Brand Identity',
    body: 'Naming, marks, type systems and the soul of how you sound. We don\'t do logos — we do worlds.',
    bullets: ['Logo + system', 'Voice & messaging', 'Guidelines'],
    tone: 'bg-ember text-cream',
  },
  {
    n: '02',
    title: 'Web & Product',
    body: 'High-craft websites and product UIs built on Next.js, React and Tailwind. Designed to load fast and feel even faster.',
    bullets: ['Marketing sites', 'SaaS dashboards', 'Headless commerce'],
    tone: 'bg-cream text-ink border border-ink',
  },
  {
    n: '03',
    title: 'Motion & 3D',
    body: 'Interaction, micro-motion and the occasional WebGL stunt that turns a scroll into a moment.',
    bullets: ['Page transitions', 'Scroll storytelling', 'WebGL hero pieces'],
    tone: 'bg-ink text-cream',
  },
  {
    n: '04',
    title: 'AI Interfaces',
    body: 'We design human-feeling interfaces around language models — chat, agents, copilots, and tools that actually ship.',
    bullets: ['Prompt UX', 'Agentic flows', 'LLM-native UI'],
    tone: 'bg-sun text-ink',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40 bg-cream">
      <div className="absolute inset-0 dotted opacity-60" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
          <div>
            <span className="badge text-ink mb-6">✺ The studio</span>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-3xl mt-6">
              Four crafts.
              <br />
              <span className="italic font-light">One sharp</span> sensibility.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70 leading-relaxed">
            We are deliberately small so we can be deliberately good. Every project
            runs through the hands of senior designers and engineers — no juniors,
            no handoffs, no waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`${s.tone} rounded-[28px] p-8 lg:p-10 relative overflow-hidden group transition-transform duration-500 hover:-translate-y-2`}
              style={{ minHeight: 360 }}
            >
              <div className="flex items-start justify-between gap-6 mb-10">
                <span className="font-mono text-xs tracking-[0.2em] uppercase opacity-80">
                  Service / {s.n}
                </span>
                <span className="font-display text-6xl font-black opacity-90 group-hover:rotate-12 transition-transform">
                  ✺
                </span>
              </div>
              <h3 className="font-display text-4xl lg:text-5xl font-black leading-none tracking-tight mb-5">
                {s.title}
              </h3>
              <p className="opacity-85 leading-relaxed mb-6 max-w-md">{s.body}</p>
              <ul className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.15em]">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="px-3 py-1.5 rounded-full border border-current opacity-90"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

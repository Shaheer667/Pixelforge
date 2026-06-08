const quotes = [
  {
    body: 'PixelForge rebuilt our entire brand and site in nine weeks. Inbound demos tripled the month we launched. They are an unfair advantage.',
    name: 'Mira Ahuja',
    role: 'CEO, Lumen Health',
    tone: 'bg-ember text-cream',
  },
  {
    body: 'Most agencies sell you a deck. These people shipped a product. The kind of partner you keep on speed-dial for years.',
    name: 'Tomás Reyes',
    role: 'Head of Design, Northstar',
    tone: 'bg-sun text-ink',
  },
  {
    body: 'A studio that actually understands engineering. Our Lighthouse scores went from 51 to 98 and the site looks ten times better.',
    name: 'Ayesha Khan',
    role: 'CTO, Foundry Labs',
    tone: 'bg-cream text-ink border border-ink',
  },
  {
    body: 'They turned a confusing AI product into an interface our users actually love. Day-one retention up 41%.',
    name: 'Jules Beaumont',
    role: 'Founder, Echo.ai',
    tone: 'bg-ink text-cream',
  },
];

export default function Testimonials() {
  return (
    <section id="voices" className="relative py-28 lg:py-40 bg-cream overflow-hidden">
      <div className="absolute inset-0 diag-lines pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
          <div>
            <span className="badge text-ink mb-6">✺ Voices from the forge</span>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mt-6 max-w-3xl">
              Founders who
              <br />
              <span className="italic font-light">trusted us</span> with the fire.
            </h2>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 max-w-xs">
            ↳ 92% of new work comes from referrals or returning clients.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className={`${q.tone} rounded-[28px] p-8 lg:p-12 relative flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2`}
              style={{ minHeight: 340 }}
            >
              <div
                className="font-display text-7xl leading-none opacity-90 mb-4"
                aria-hidden
              >
                &ldquo;
              </div>
              <blockquote className="font-display text-2xl lg:text-3xl leading-snug tracking-tight">
                {q.body}
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between gap-4">
                <div>
                  <div className="font-display font-bold">{q.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">
                    {q.role}
                  </div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                  Quote / {String(i + 1).padStart(2, '0')}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

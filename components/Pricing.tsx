const plans = [
  {
    name: 'Spark',
    price: '4.8k',
    period: '/ one-time',
    tagline: 'For founders who need to show up sharp.',
    features: [
      'Brand mark + simple system',
      'One-page marketing site',
      'Copy direction',
      '2 weeks · 1 senior designer',
    ],
    tone: 'bg-cream text-ink border border-ink',
    cta: 'Start with Spark',
  },
  {
    name: 'Forge',
    price: '14k',
    period: '/ starting at',
    tagline: 'The studio classic. Brand and a site that ships in six weeks.',
    features: [
      'Full brand identity system',
      'Up to 6-page Next.js site',
      'CMS or headless setup',
      'Motion + interaction layer',
      '6 weeks · senior pod of 3',
    ],
    tone: 'bg-ink text-cream relative',
    cta: 'Light the Forge',
    featured: true,
  },
  {
    name: 'Atelier',
    price: 'Custom',
    period: '/ retainer',
    tagline: 'An embedded studio for ongoing product, brand and growth work.',
    features: [
      'Dedicated design + eng pod',
      'Quarterly roadmapping',
      'Product, growth, brand',
      'Slack-first collaboration',
    ],
    tone: 'bg-ember text-cream',
    cta: 'Talk about Atelier',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 lg:py-40 bg-ink text-cream overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] ember-grad rounded-full blur-3xl opacity-30" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
          <div>
            <span className="badge text-sun mb-6">✺ Engagements</span>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mt-6 max-w-3xl">
              Pick a flame.
              <br />
              <span className="stroke-text-cream">We&apos;ll build the fire.</span>
            </h2>
          </div>
          <p className="max-w-sm text-cream/70 leading-relaxed">
            Transparent fixed-fee packages and a flexible retainer. No hourly
            billing, no sneaky add-ons — just senior craft and a fair price.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`${p.tone} rounded-[28px] p-8 lg:p-10 flex flex-col transition-transform duration-500 hover:-translate-y-2`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 badge !bg-sun !text-ink !border-ink">
                  ◉ Most picked
                </span>
              )}
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
                  {p.name}
                </span>
                <span className="font-display text-4xl font-black opacity-90">✺</span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display text-6xl lg:text-7xl font-black tracking-tight">
                  ${p.price}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">
                  {p.period}
                </span>
              </div>
              <p className="opacity-85 mb-8 leading-relaxed">{p.tagline}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0 opacity-80" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-between gap-2 border border-current rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-current hover:text-ink transition group"
              >
                {p.cta}
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden>
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

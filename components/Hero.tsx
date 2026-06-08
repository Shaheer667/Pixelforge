export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen sunset-bg grain overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 diag-lines pointer-events-none" />

      {/* floating sun disc */}
      <div className="absolute -right-32 top-24 w-[520px] h-[520px] rounded-full ember-grad opacity-90 blur-[2px] animate-float" />
      <div className="absolute -right-10 top-44 w-[360px] h-[360px] rounded-full bg-ink opacity-95" />
      <div className="absolute right-20 top-60 w-[200px] h-[200px] rounded-full bg-sun mix-blend-screen" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* eyebrow row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16 reveal" style={{ animationDelay: '0.05s' }}>
          <span className="badge text-ink">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            Est. 2019 · A digital forge
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
            Lahore ⇄ Dubai ⇄ Brooklyn
          </span>
        </div>

        {/* massive headline */}
        <h1 className="font-display font-black leading-[0.88] tracking-[-0.03em] text-ink">
          <span className="block reveal" style={{ animationDelay: '0.15s' }}>
            <span className="text-[clamp(3.5rem,11vw,11rem)]">We forge</span>
          </span>
          <span className="block reveal" style={{ animationDelay: '0.3s' }}>
            <span className="text-[clamp(3.5rem,11vw,11rem)] italic font-light">brands that</span>
          </span>
          <span className="block reveal" style={{ animationDelay: '0.45s' }}>
            <span className="text-[clamp(3.5rem,11vw,11rem)] stroke-text">burn bright.</span>
          </span>
        </h1>

        {/* sub row */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <p className="lg:col-span-5 text-lg lg:text-xl leading-relaxed text-ink/80 max-w-xl reveal" style={{ animationDelay: '0.6s' }}>
            PixelForge is a small, fierce studio of designers and engineers
            crafting <em className="font-display">unforgettable</em> websites,
            brand systems and product experiences for ambitious teams.
          </p>

          <div className="lg:col-span-4 lg:col-start-7 flex flex-wrap gap-3 reveal" style={{ animationDelay: '0.75s' }}>
            <a href="#contact" className="btn-primary">
              Book a discovery call
              <span aria-hidden>→</span>
            </a>
            <a href="#services" className="btn-ghost">See the work</a>
          </div>

          <div className="lg:col-span-3 lg:col-start-11 lg:justify-self-end text-right reveal" style={{ animationDelay: '0.9s' }}>
            <div className="font-display text-6xl font-black text-ember">07</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70 mt-1">
              years · 140+ projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

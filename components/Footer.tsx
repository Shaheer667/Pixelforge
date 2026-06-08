export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute -left-20 bottom-0 w-[420px] h-[420px] rounded-full ember-grad opacity-20 blur-3xl" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-full ember-grad relative overflow-hidden">
                <span className="absolute inset-1 rounded-full bg-ink"></span>
                <span className="absolute inset-[10px] rounded-full bg-sun"></span>
              </span>
              <span className="font-display text-2xl font-black tracking-tight">
                PixelForge<span className="text-ember">.</span>
              </span>
            </div>
            <p className="font-display text-3xl lg:text-4xl leading-tight tracking-tight max-w-xl">
              A digital forge for ambitious teams.
              <span className="italic font-light text-cream/70"> Built by hand, lit by sunset.</span>
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-sun mb-4">Studio</div>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#services" className="hover:text-ember transition">Services</a></li>
              <li><a href="#work" className="hover:text-ember transition">Work</a></li>
              <li><a href="#pricing" className="hover:text-ember transition">Pricing</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-sun mb-4">Contact</div>
            <ul className="space-y-2 text-cream/80">
              <li>hello@pixelforge.studio</li>
              <li>+92 300 PIXEL</li>
              <li>Lahore · Dubai · NYC</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-sun mb-4">Elsewhere</div>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#" className="hover:text-ember transition">Instagram</a></li>
              <li><a href="#" className="hover:text-ember transition">Dribbble</a></li>
              <li><a href="#" className="hover:text-ember transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60">
          <div>© {new Date().getFullYear()} PixelForge Studio · All rights forged</div>
          <div>Forged in Next.js · Designed in the dark · Lit at sunset</div>
        </div>
      </div>
    </footer>
  );
}

const items = [
  'Brand Identity',
  'Product Design',
  'Web Engineering',
  'Motion',
  'AI Interfaces',
  'Editorial',
  'Strategy',
  'Design Systems',
];

export default function Marquee() {
  const doubled = [...items, ...items, ...items];
  return (
    <section className="relative bg-ink text-cream border-y border-ember/40 py-7 overflow-hidden">
      <div className="ticker-track animate-marquee">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-3xl md:text-5xl font-black tracking-tight whitespace-nowrap"
          >
            {t}
            <span className="text-ember">✺</span>
          </span>
        ))}
      </div>
    </section>
  );
}

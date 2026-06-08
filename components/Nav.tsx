'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-cream/80 border-b border-ink/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full ember-grad relative overflow-hidden">
            <span className="absolute inset-1 rounded-full bg-ink"></span>
            <span className="absolute inset-[10px] rounded-full bg-sun group-hover:animate-spin-slow"></span>
          </span>
          <span className="font-display text-2xl font-black tracking-tight">
            PixelForge<span className="text-ember">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 font-mono text-[11px] uppercase tracking-[0.2em]">
          <a href="#work" className="hover:text-ember transition">Work</a>
          <a href="#services" className="hover:text-ember transition">Studio</a>
          <a href="#pricing" className="hover:text-ember transition">Pricing</a>
          <a href="#voices" className="hover:text-ember transition">Voices</a>
        </nav>
        <a href="#contact" className="btn-primary !py-3 !px-5 text-[10px]">
          Start a project
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

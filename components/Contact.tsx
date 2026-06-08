'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project enquiry — ${form.name}${form.company ? ' · ' + form.company : ''}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Company: ${form.company || '—'}\n` +
        `Budget: ${form.budget || '—'}\n\n` +
        `Project brief:\n${form.message}\n`
    );
    window.location.href = `mailto:hello@pixelforge.studio?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-40 sunset-bg grain overflow-hidden">
      <div className="absolute inset-0 diag-lines pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="badge text-ink mb-6">✺ Start a project</span>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mt-6 text-ink">
              Tell us
              <br />
              <span className="italic font-light">what you</span>
              <br />
              are building.
            </h2>
            <p className="mt-8 text-ink/80 leading-relaxed max-w-md">
              We reply to every serious enquiry within one working day. The more
              detail you share, the better our first call will be.
            </p>

            <div className="mt-12 space-y-5 font-mono text-sm">
              <div className="flex items-center gap-3 text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                hello@pixelforge.studio
              </div>
              <div className="flex items-center gap-3 text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                +92 300 PIXEL · +1 718 555 0148
              </div>
              <div className="flex items-center gap-3 text-ink/70">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                Mon–Fri · 10:00–19:00 PKT
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            onSubmit={submit}
            className="lg:col-span-7 ink-card p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full ember-grad opacity-70 blur-xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" value={form.name} onChange={onChange} placeholder="Mira A." required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@company.com" required />
              <Field label="Company" name="company" value={form.company} onChange={onChange} placeholder="Optional" />
              <SelectField
                label="Budget"
                name="budget"
                value={form.budget}
                onChange={onChange}
                options={[
                  { v: '', l: 'Select a range' },
                  { v: '<5k', l: 'Under $5k' },
                  { v: '5-15k', l: '$5k – $15k' },
                  { v: '15-50k', l: '$15k – $50k' },
                  { v: '50k+', l: '$50k +' },
                ]}
              />
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-cream/70 mb-2">
                  Project brief
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us about the goal, timeline and anything we should know."
                  className="w-full bg-transparent border border-cream/20 rounded-2xl px-4 py-3 text-cream placeholder-cream/40 focus:border-sun focus:outline-none focus:ring-2 focus:ring-sun/40 transition"
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
                  ↳ Opens your email client with the message pre-filled.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full ember-grad text-ink font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#fff4e6] transition"
                >
                  Send to the forge
                  <span aria-hidden>→</span>
                </button>
              </div>

              {sent && (
                <div className="md:col-span-2 mt-2 p-4 rounded-2xl bg-sun text-ink font-mono text-sm flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
                  Mail client opened. Hit send to deliver your brief.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-cream/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border border-cream/20 rounded-full px-4 py-3 text-cream placeholder-cream/40 focus:border-sun focus:outline-none focus:ring-2 focus:ring-sun/40 transition"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { v: string; l: string }[];
}) {
  return (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-[0.2em] text-cream/70 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-ink border border-cream/20 rounded-full px-4 py-3 text-cream focus:border-sun focus:outline-none focus:ring-2 focus:ring-sun/40 transition appearance-none"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v} className="bg-ink text-cream">
            {o.l}
          </option>
        ))}
      </select>
    </div>
  );
}

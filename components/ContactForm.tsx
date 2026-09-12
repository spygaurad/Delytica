"use client";

import { useState } from "react";
import Link from "next/link";

const initialForm = {
  name: "",
  email: "",
  practice: "",
  locations: "1",
  message: "",
};

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`min-h-[320px] flex flex-col items-center justify-center text-center p-10 rounded-2xl border ${
        dark ? "bg-white/5 border-white/10" : "bg-white border-parchment"
      }`}>
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-5 ${
          dark ? "border-rosewood text-rosewood" : "border-rosewood text-rosewood"
        }`}>
          ✓
        </div>
        <h3 className={`font-serif text-xl font-normal mb-2 ${dark ? "text-eggshell" : "text-ink"}`}>
          Message sent
        </h3>
        <p className={`text-[15px] leading-relaxed max-w-xs ${dark ? "text-eggshell/50" : "text-mist"}`}>
          We respond within 24 hours. Or{" "}
          <Link href="/booking" className="text-rosewood hover:underline">
            book a call directly
          </Link>
          .
        </p>
      </div>
    );
  }

  const fieldClass = dark
    ? "w-full border border-white/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white/8 text-eggshell placeholder:text-eggshell/30"
    : "w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-eggshell/60 text-ink placeholder:text-mist/60";

  const labelClass = dark ? "block text-xs font-medium mb-1.5 text-eggshell/40" : "block text-xs font-medium mb-1.5 text-mist";

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 rounded-2xl p-8 border ${
        dark ? "bg-white/5 border-white/10" : "bg-white border-parchment"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Your name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={fieldClass}
            placeholder="jane@yourmedspa.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Practice name</label>
          <input
            type="text"
            name="practice"
            value={form.practice}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Glow Medical Aesthetics"
          />
        </div>
        <div>
          <label className={labelClass}>Locations</label>
          <select
            name="locations"
            value={form.locations}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="1">1 location</option>
            <option value="2-4">2–4 locations</option>
            <option value="5-9">5–9 locations</option>
            <option value="10+">10+ locations</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${fieldClass} resize-none`}
          placeholder="Current challenges, which tier you're considering, or anything else."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-rosewood text-white text-sm font-medium py-3.5 rounded-full hover:bg-rosewood-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood focus-visible:ring-offset-2 focus-visible:ring-offset-plum-mid"
      >
        Send message
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const initialForm = { name: "", email: "", practice: "", message: "" };

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[36px] border border-cloud bg-white p-10 text-center">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-ember text-ember">✓</div>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-obsidian">Message sent</h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-fog">We respond within 24 hours. Or <Link href="/booking" className="text-ember hover:underline">request an audit</Link>.</p>
      </div>
    );
  }

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  return (
    <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-4 rounded-[36px] border border-cloud bg-white p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" value={form.name} onChange={updateField} required placeholder="Jane Smith" />
        <Field label="Email" name="email" type="email" value={form.email} onChange={updateField} required placeholder="jane@yourmedspa.com" />
        <Field label="Practice name" name="practice" value={form.practice} onChange={updateField} placeholder="Glow Medical Aesthetics" />
      </div>
      <label className="block text-sm font-medium text-iron">
        Message
        <textarea name="message" required rows={4} value={form.message} onChange={updateField} className="mt-2 w-full resize-none rounded-[14px] border border-cloud bg-white px-4 py-3 text-sm text-graphite outline-none transition placeholder:text-ash focus:border-ember focus:ring-2 focus:ring-orange-100" placeholder="Current challenges, care plans, or growth goals." />
      </label>
      <button type="submit" className="w-full rounded-[14px] bg-obsidian py-3.5 text-sm font-semibold text-white transition hover:bg-graphite">Send message</button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder, required = false }: { label: string; name: string; value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; type?: string; placeholder: string; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-iron">
      {label}{required ? " *" : ""}
      <input type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className="mt-2 w-full rounded-[14px] border border-cloud bg-white px-4 py-3 text-sm text-graphite outline-none transition placeholder:text-ash focus:border-ember focus:ring-2 focus:ring-orange-100" />
    </label>
  );
}

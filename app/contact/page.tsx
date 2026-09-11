"use client";

import Link from "next/link";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

const quickFaqs = [
  {
    q: "Do you work with new med spas?",
    a: "Yes — automation is often even more valuable at launch, before bad habits form around no-shows and missed calls.",
  },
  {
    q: "Is there a minimum contract?",
    a: "No minimum contract on Tier 1. Month-to-month after the one-time setup fee.",
  },
  {
    q: "Can I refer someone?",
    a: "Referrals from our network are how we grow in Phase 1. Mention who referred you on your discovery call.",
  },
];

const initialForm = {
  name: "",
  email: "",
  practice: "",
  locations: "1",
  message: "",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);


  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageTransition>
    <>
      {/* Header */}
      <section className="bg-[#160E3C] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#9B8DFF] text-xs uppercase tracking-[0.2em] mb-6">
            Contact
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            Have a question before booking? Send us a message — we respond
            within 24 business hours.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Info */}
        <div>
          <div className="space-y-8 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#9184C4] mb-2">Email</p>
              <p className="text-[15px] text-[#160E3C]">hello@delytica.agency</p>
              <p className="text-xs text-[#9184C4] mt-1">Response within 24 business hours</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#9184C4] mb-2">Support</p>
              <p className="text-[15px] lg:text-[17px] text-[#6B6898] leading-relaxed">
                Async-only for Tier 1. Faster windows available for Tier 2 and 3 clients.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#9184C4] mb-3">Prefer to book directly?</p>
              <Link
                href="/booking"
                className="inline-block bg-[#6B5CE7] text-white text-sm px-6 py-3 rounded-full hover:bg-[#5A4BD0] transition-colors"
              >
                Book a Free 30-Min Call
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#9184C4] mb-6">
              Quick answers
            </p>
            <div className="space-y-6">
              {quickFaqs.map((item) => (
                <div key={item.q} className="border-l-2 border-[#DDD8FF] pl-5">
                  <p className="text-[15px] lg:text-[17px] font-medium text-[#160E3C] mb-1">{item.q}</p>
                  <p className="text-[15px] lg:text-[17px] text-[#6B6898] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-10 border border-[#DDD8FF] rounded-2xl bg-white">
              <div className="w-12 h-12 rounded-full border border-[#9B8DFF] flex items-center justify-center text-[#9B8DFF] mb-6 text-lg">
                ✓
              </div>
              <h3 className="font-serif text-2xl font-normal mb-3">Message Sent</h3>
              <p className="text-[15px] text-[#6B6898] mb-6 leading-relaxed max-w-xs">
                We&apos;ll get back to you within 24 business hours. In the meantime,{" "}
                <Link href="/booking" className="text-[#9184C4] hover:underline">
                  book a discovery call
                </Link>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white border border-[#DDD8FF] rounded-2xl p-8"
            >
              <h2 className="font-serif text-2xl font-normal mb-1">Send a message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors"
                    placeholder="jane@yourmedspa.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                  Practice Name
                </label>
                <input
                  type="text"
                  name="practice"
                  value={form.practice}
                  onChange={handleChange}
                  className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors"
                  placeholder="Glow Medical Aesthetics"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                  Number of Locations
                </label>
                <select
                  name="locations"
                  value={form.locations}
                  onChange={handleChange}
                  className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors bg-white"
                >
                  <option value="1">1 location</option>
                  <option value="2-4">2–4 locations</option>
                  <option value="5-9">5–9 locations</option>
                  <option value="10+">10+ locations</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors resize-none"
                  placeholder="Tell us what's on your mind — current challenges, which tier you're considering, or anything else."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#6B5CE7] text-white text-sm font-medium py-3.5 rounded-full hover:bg-[#5A4BD0] transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
    </PageTransition>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "1:00 PM", "1:30 PM", "2:00 PM",
  "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

const tierLabels: Record<string, string> = {
  tier1: "Practice Essentials ($297/mo)",
  tier2: "Practice Growth ($697–$1,200/mo)",
  tier3: "Full Partnership ($1,800–$3,500/mo)",
  unsure: "Not sure yet — want guidance",
};

const initialForm = {
  name: "",
  email: "",
  phone: "",
  practice: "",
  locations: "1",
  tier: "tier1",
  referral: "",
  notes: "",
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
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
      <PageTransition>
        <section className="min-h-[75vh] flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="w-14 h-14 rounded-full border border-rosewood flex items-center justify-center text-rosewood mx-auto mb-8 text-xl">
              ✓
            </div>
            <h1 className="font-serif text-3xl font-normal mb-3">You&apos;re booked</h1>
            <p className="text-sm text-ink/60 leading-relaxed mb-1">
              We&apos;ll send a calendar invite to{" "}
              <strong className="text-ink">{form.email}</strong>.
            </p>
            <p className="text-sm text-ink/60 leading-relaxed mb-10">
              Time: <strong className="text-ink">{selectedTime}</strong> &nbsp;·&nbsp; Interest:{" "}
              <strong className="text-ink">{tierLabels[form.tier]}</strong>
            </p>
            <p className="text-xs text-mist mb-8 leading-relaxed">
              While you wait — if you know another med spa owner who could use
              this, a referral means their setup fee is waived.
            </p>
            <Link
              href="/"
              className="inline-block bg-rosewood text-white text-sm px-8 py-3.5 rounded-full hover:bg-rosewood-dark transition-colors"
            >
              Back to home
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <>
        <section className="bg-plum-deep text-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="font-serif italic text-eggshell/40 text-sm mb-6">Book a call</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal mb-4">
              Free 30-minute discovery call
            </h1>
            <p className="text-eggshell/50 text-sm max-w-md mx-auto leading-relaxed">
              No pitch, no pressure. We&apos;ll map your current gaps and tell you
              honestly which tier — if any — is the right fit.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-12">
            {[1, 2].map((n) => (
              <div key={n} className="flex items-center gap-3 flex-1 last:flex-none">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 transition-colors ${
                    step >= n
                      ? "bg-plum-deep text-white"
                      : "bg-parchment text-mist"
                  }`}
                >
                  {n}
                </div>
                <span className="text-xs text-ink/60">
                  {n === 1 ? "Pick a time" : "Your details"}
                </span>
                {n < 2 ? (
                  <div
                    className={`h-px flex-1 transition-colors ${
                      step > n ? "bg-rosewood" : "bg-parchment"
                    }`}
                  />
                ) : null}
              </div>
            ))}
          </div>

          {step === 1 ? (
            <div>
              <h2 className="font-serif text-2xl font-normal mb-2">Select a time</h2>
              <p className="text-sm text-ink/60 mb-8">All times shown in Eastern. Next available week.</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 mb-10">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-3 rounded-xl text-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood ${
                      selectedTime === time
                        ? "bg-plum-deep text-white border-plum-deep"
                        : "border-parchment text-ink hover:border-rosewood hover:text-rosewood"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!selectedTime}
                className="w-full bg-rosewood text-white text-sm font-medium py-4 rounded-full hover:bg-rosewood-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood"
              >
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-serif text-2xl font-normal">Your details</h2>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-mist hover:text-rosewood transition-colors"
                >
                  ← Change time ({selectedTime})
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-mist">Full name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white text-ink placeholder:text-mist/60"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-mist">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white text-ink placeholder:text-mist/60"
                    placeholder="jane@yourmedspa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-mist">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white text-ink placeholder:text-mist/60"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-mist">Practice name</label>
                  <input
                    type="text"
                    name="practice"
                    value={form.practice}
                    onChange={handleChange}
                    className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white text-ink placeholder:text-mist/60"
                    placeholder="Glow Medical Aesthetics"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-mist">Locations</label>
                  <select
                    name="locations"
                    value={form.locations}
                    onChange={handleChange}
                    className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white text-ink"
                  >
                    <option value="1">1 location</option>
                    <option value="2-4">2–4 locations</option>
                    <option value="5-9">5–9 locations</option>
                    <option value="10+">10+ locations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-mist">Tier interest</label>
                  <select
                    name="tier"
                    value={form.tier}
                    onChange={handleChange}
                    className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white text-ink"
                  >
                    <option value="tier1">Practice Essentials</option>
                    <option value="tier2">Practice Growth</option>
                    <option value="tier3">Full Partnership</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5 text-mist">Who referred you? (optional)</label>
                <input
                  type="text"
                  name="referral"
                  value={form.referral}
                  onChange={handleChange}
                  className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors bg-white text-ink placeholder:text-mist/60"
                  placeholder="Name or practice"
                />
                <p className="text-xs text-mist mt-1.5">
                  Founding clients referred by our network get setup fee waived.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5 text-mist">Anything we should know?</label>
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full border border-parchment rounded-xl px-4 py-3 text-sm outline-none focus:border-rosewood transition-colors resize-none bg-white text-ink placeholder:text-mist/60"
                  placeholder="Current tools, biggest pain points, goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rosewood text-white text-sm font-medium py-4 rounded-full hover:bg-rosewood-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood"
              >
                Confirm booking for {selectedTime}
              </button>
            </form>
          )}
        </section>
      </>
    </PageTransition>
  );
}

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
  tier1: "Automation Foundation ($297/mo)",
  tier2: "Growth Add-On ($697–$1,200/mo)",
  tier3: "Full Growth Partner ($1,800–$3,500/mo)",
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

  if (submitted) {
    return (
      <PageTransition>
      <section className="min-h-[75vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-14 h-14 rounded-full border border-[#9B8DFF] flex items-center justify-center text-[#9B8DFF] mx-auto mb-8 text-xl">
            ✓
          </div>
          <h1 className="font-serif text-3xl font-normal mb-3">You&apos;re booked</h1>
          <p className="text-sm text-[#6B6898] leading-relaxed mb-1">
            We&apos;ll send a calendar invite to{" "}
            <strong className="text-[#160E3C]">{form.email}</strong>.
          </p>
          <p className="text-sm text-[#6B6898] leading-relaxed mb-10">
            Time: <strong className="text-[#160E3C]">{selectedTime}</strong> &nbsp;·&nbsp; Interest:{" "}
            <strong className="text-[#160E3C]">{tierLabels[form.tier]}</strong>
          </p>
          <p className="text-xs text-[#9184C4] mb-8 leading-relaxed">
            While you wait — if you know another med spa owner who could use
            this, a referral means their setup fee is waived.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#6B5CE7] text-white text-sm px-8 py-3.5 rounded-full hover:bg-[#5A4BD0] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
    <>
      {/* Header */}
      <section className="bg-[#160E3C] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#9B8DFF] text-xs uppercase tracking-[0.2em] mb-6">
            Book a Call
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mb-4">
            Free 30-minute discovery call
          </h1>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            No pitch, no pressure. We&apos;ll map your current gaps and tell you
            honestly which tier — if any — is the right fit.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        {/* Progress indicator */}
        <div className="flex items-center gap-3 mb-12">
          {[1, 2].map((n) => (
            <div key={n} className="flex items-center gap-3 flex-1 last:flex-none">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 transition-colors ${
                  step >= n
                    ? "bg-[#160E3C] text-white"
                    : "bg-[#DDD8FF] text-[#9184C4]"
                }`}
              >
                {n}
              </div>
              <span className="text-xs text-[#6B6898]">
                {n === 1 ? "Pick a time" : "Your details"}
              </span>
              {n < 2 ? (
                <div
                  className={`h-px flex-1 transition-colors ${
                    step > n ? "bg-[#9B8DFF]" : "bg-[#DDD8FF]"
                  }`}
                />
              ) : null}
            </div>
          ))}
        </div>

        {/* Step 1: Time selection */}
        {step === 1 ? (
          <div>
            <h2 className="font-serif text-2xl font-normal mb-2">
              Select a time
            </h2>
            <p className="text-sm text-[#6B6898] mb-8">
              All times shown in Eastern. Next available week.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 mb-10">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-3 rounded-xl text-sm border transition-colors ${
                    selectedTime === time
                      ? "bg-[#160E3C] text-white border-[#160E3C]"
                      : "border-[#DDD8FF] text-[#160E3C] hover:border-[#9B8DFF] hover:text-[#9B8DFF]"
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
              className="w-full bg-[#6B5CE7] text-white text-sm font-medium py-4 rounded-full hover:bg-[#5A4BD0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Continue →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-serif text-2xl font-normal">Your details</h2>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#9184C4] hover:text-[#9B8DFF] transition-colors"
              >
                ← Change time ({selectedTime})
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                  Full Name *
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
                  Email *
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors"
                  placeholder="(555) 000-0000"
                />
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                  Locations
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
                  Tier Interest
                </label>
                <select
                  name="tier"
                  value={form.tier}
                  onChange={handleChange}
                  className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors bg-white"
                >
                  <option value="tier1">Automation Foundation</option>
                  <option value="tier2">Growth Add-On</option>
                  <option value="tier3">Full Growth Partner</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                Who referred you? (optional)
              </label>
              <input
                type="text"
                name="referral"
                value={form.referral}
                onChange={handleChange}
                className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors"
                placeholder="Name or practice"
              />
              <p className="text-xs text-[#9184C4] mt-1.5">
                Founding clients referred by our network get setup fee waived.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2 text-[#9184C4] uppercase tracking-[0.12em]">
                Anything we should know?
              </label>
              <textarea
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                className="w-full border border-[#DDD8FF] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#9B8DFF] transition-colors resize-none"
                placeholder="Current tools, biggest pain points, goals..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6B5CE7] text-white text-sm font-medium py-4 rounded-full hover:bg-[#5A4BD0] transition-colors"
            >
              Confirm Booking for {selectedTime}
            </button>
          </form>
        )}
      </section>
    </>
    </PageTransition>
  );
}

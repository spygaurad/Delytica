"use client";

import { useState } from "react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];

const initialForm = { name: "", email: "", phone: "", practice: "", notes: "" };

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  if (submitted) {
    return (
      <PageTransition>
        <section className="flex min-h-[75vh] items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-ember text-xl text-ember">✓</div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-obsidian">You&apos;re booked.</h1>
            <p className="mt-4 text-sm leading-relaxed text-iron">We&apos;ll send a calendar invite to <strong className="text-graphite">{form.email}</strong>.</p>
            <p className="mt-2 text-sm leading-relaxed text-iron">Time: <strong className="text-graphite">{selectedTime}</strong></p>
            <Link href="/" className="mt-10 inline-flex rounded-[14px] bg-obsidian px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-graphite">Back to home</Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-paper">
        <section className="border-b border-cloud bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Practice capacity audit</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-obsidian">Map the path from patient intent to recurring care.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-iron">Choose a time, share a little context, and we&apos;ll come prepared to discuss the highest-LTV growth opportunity in your practice.</p>
          </div>
        </section>
        <section className="mx-auto max-w-2xl px-6 py-12 lg:py-20">
          <div className="mb-12 flex items-center gap-3">
            {[1, 2].map((number) => (
              <div key={number} className="flex flex-1 items-center gap-3 last:flex-none">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${step >= number ? "bg-obsidian text-white" : "bg-mist text-iron"}`}>{number}</span>
                <span className="text-xs text-iron">{number === 1 ? "Pick a time" : "Your details"}</span>
                {number === 1 ? <span className={`h-px flex-1 ${step > 1 ? "bg-ember" : "bg-cloud"}`} /> : null}
              </div>
            ))}
          </div>

          {step === 1 ? (
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-obsidian">Select a time</h2>
              <p className="mt-3 text-sm text-iron">All times shown in Eastern. Next available week.</p>
              <div className="mt-8 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                {timeSlots.map((time) => (
                  <button key={time} type="button" onClick={() => setSelectedTime(time)} className={`rounded-[14px] border px-3 py-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember ${selectedTime === time ? "border-ember bg-orange-50 text-graphite" : "border-cloud bg-white text-iron hover:border-ember"}`}>{time}</button>
                ))}
              </div>
              <button type="button" onClick={() => setStep(2)} disabled={!selectedTime} className="mt-10 w-full rounded-[14px] bg-obsidian py-4 text-sm font-semibold text-white transition hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-40">Continue</button>
            </div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div className="mb-2 flex items-center justify-between gap-4">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-obsidian">Your details</h2>
                <button type="button" onClick={() => setStep(1)} className="text-xs text-fog hover:text-ember">Change time ({selectedTime})</button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@yourmedspa.com" />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                <Field label="Practice name" name="practice" value={form.practice} onChange={handleChange} placeholder="Glow Medical Aesthetics" />
              </div>
              <label className="block text-sm font-medium text-iron">
                What should we know?
                <textarea name="notes" rows={4} value={form.notes} onChange={handleChange} className="mt-2 w-full resize-none rounded-[14px] border border-cloud bg-white px-4 py-3 text-sm text-graphite outline-none transition focus:border-ember focus:ring-2 focus:ring-orange-100" placeholder="Current patient programs, goals, or capacity constraints." />
              </label>
              <button type="submit" className="w-full rounded-[14px] bg-obsidian py-4 text-sm font-semibold text-white transition hover:bg-graphite">Confirm audit for {selectedTime}</button>
            </form>
          )}
        </section>
      </div>
    </PageTransition>
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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import RevenueCalculator from "@/components/RevenueCalculator";

export const metadata: Metadata = {
  title: "Continuity Growth for Medspas",
  description:
    "Delytica builds high-LTV patient acquisition and membership programs for medspas, supporting existing patients into recurring care plans.",
  alternates: { canonical: "https://delytica.com" },
};

const platformLogos = [
  { src: "/images/platforms/boulevard.svg",                                                         alt: "Boulevard" },
  { src: "/images/platforms/zenoti.svg",                                                             alt: "Zenoti" },
  { src: "/images/platforms/vagaro.svg",                                                             alt: "Vagaro" },
  { src: "/images/platforms/mindbody.svg",                                                           alt: "Mindbody" },
  { src: "/images/platforms/ar-logo.png",                                                             alt: "Aesthetic Record" },
];

const steps = [
  {
    label: "01",
    title: "Attract",
    subtitle: "Reach patients looking for transformation.",
    body: "Bring high value patients seeking GLP-1, HRT, and aesthetic care into your practice, not simply for a single treatment, but for a longer term relationship.",
  },
  {
    label: "02",
    title: "Reconnect",
    subtitle: "Give existing patients a reason to return.",
    body: "Introduce tailored care plans to the patients who already know and trust your practice, creating a natural path into ongoing care.",
  },
  {
    label: "03",
    title: "Educate",
    subtitle: "Make the next step feel effortless.",
    body: "Provider led education helps patients understand the value of ongoing care before they arrive, creating informed conversations and stronger enrollment.",
  },
  {
    label: "04",
    title: "Continue",
    subtitle: "Turn intention into ongoing care.",
    body: "A seamless enrollment experience moves patients into their membership, with automated monthly billing and a care journey designed to continue.",
  },
];

const faqs = [
  {
    question: "Who is the clinical education content designed for?",
    answer:
      "Primarily your existing patient base. The video education sequences introduce current patients to new high LTV programs — GLP-1, HRT, and aesthetic memberships — so they understand the value and are ready to enroll without a hard sales conversation.",
  },
  {
    question: "How do these programs create recurring revenue?",
    answer:
      "Programs are built around monthly care plans — GLP-1 protocols, HRT regimens, and skin health memberships billed automatically each month. Each enrolled patient contributes to a compounding monthly base rather than a single transaction.",
  },
  {
    question: "Who pays for the patient acquisition budget?",
    answer:
      "Your practice pays Meta and Google directly. That keeps your investment transparent with no agency markup and gives you complete visibility into your patient acquisition costs.",
  },
  {
    question: "How long before we see results?",
    answer:
      "Most practices see qualified patient inquiries within the first 2–3 weeks of program launch. Meaningful recurring revenue growth typically emerges in months 2–3 as care plans activate and patients begin their protocols.",
  },
];

const testimonials = [
  {
    quote:
      "Before Delytica, we were spending $4,000 a month on paid advertising and attracting single session patients. Three months in, we enrolled 41 GLP-1 care plan patients — over $20k in new monthly recurring revenue from one program.",
    name: "Dr. Sarah Chen, MD",
    role: "Medical Director",
    practice: "Lumino Aesthetics · Miami, FL",
    initials: "SC",
    avatarBg: "bg-ember",
  },
  {
    quote:
      "The membership education sequence changed how our team talks to patients. Existing clients who had been coming in for Botox quarterly are now enrolled in HRT protocols. Our provider schedule is more predictable than it has ever been.",
    name: "Jessica Park, NP-C",
    role: "Practice Owner",
    practice: "Glow Medical · Austin, TX",
    initials: "JP",
    avatarBg: "bg-obsidian",
  },
  {
    quote:
      "We went from $18k to $61k in monthly recurring revenue in seven months. The clinical education content does the work before the patient walks in — they arrive understanding the protocol and ready to enroll.",
    name: "Dr. Michael Torres",
    role: "Founder",
    practice: "Revive Wellness Center · Scottsdale, AZ",
    initials: "MT",
    avatarBg: "bg-slate",
  },
];

const googleReviews = [
  {
    name: "Dr. Amanda R.",
    initials: "AR",
    text: "Delytica completely changed our patient mix. We stopped attracting discount seekers and started seeing committed patients who understand our protocols before they arrive.",
    time: "2 months ago",
  },
  {
    name: "Jennifer L.",
    initials: "JL",
    text: "Finally a partner that understands medspa economics. We launched our HRT care plan program and saw consistent enrollments within the first three weeks.",
    time: "4 months ago",
  },
  {
    name: "Coastal Wellness Clinic",
    initials: "CW",
    text: "The automated intake system alone was worth the investment. We respond to patient inquiries in under 60 seconds — even after clinic hours.",
    time: "5 months ago",
  },
  {
    name: "Dr. Mark T.",
    initials: "MT",
    text: "Patients arrive already educated about the protocol and committed to the program. The enrollment experience is seamless and our care coordinator loves it.",
    time: "6 months ago",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      <div className="bg-paper text-graphite">

        {/* ── HERO ── */}
        <section id="home" className="relative overflow-hidden border-b border-cloud">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,90,0,0.07),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-20 text-center lg:px-10 lg:pb-32 lg:pt-28">

            <div className="inline-flex items-center gap-2.5 rounded-full border border-cloud bg-white px-4 py-2 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Medspa Growth Partner</span>
            </div>

            <h1 className="hero-headline mx-auto mt-11 text-[1.75rem] font-bold leading-[1.18] tracking-[-0.04em] text-obsidian sm:text-[2.6rem] lg:text-[3.25rem]">
              Care That{" "}
              <span className="word-swap-slot">
                <span className="word-swap-a text-ember">Continues</span>
                <span className="word-swap-b text-ember">Elevates</span>
              </span>.
              <br />
              <span className="word-swap-slot">
                <span className="word-swap-a text-ember">Revenue</span>
                <span className="word-swap-b text-ember">Trust</span>
              </span>{" "}
              That Grows.
            </h1>

            <p className="hero-body mx-auto mt-5 max-w-xl text-base leading-relaxed text-iron sm:text-lg">
              Transform GLP-1, HRT, and aesthetic services into elegant monthly membership programs built around your patients and your practice.
            </p>

            <div className="hero-ctas mt-12 flex flex-col items-center gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-ember px-8 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(255,90,0,0.38)] transition hover:-translate-y-0.5 hover:bg-[#e64e00] hover:shadow-[0_8px_32px_rgba(255,90,0,0.44)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                Book a Free Practice Audit
                <span aria-hidden="true">→</span>
              </Link>
              <p className="text-sm text-fog">No long term contracts · Integrates with your existing platform stack</p>

              {/* Platform logo marquee — width follows trust line */}
              <div className="logo-marquee-fade mt-1 w-80 overflow-hidden sm:w-96">
                <div className="marquee-track flex w-max items-center gap-10">
                  {[...platformLogos, ...platformLogos].map((logo, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={logo.src}
                      alt={logo.alt}
                      height={15}
                      className="h-[15px] w-auto object-contain opacity-50 grayscale"
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── CREDIBILITY STATS ── */}
        <section className="border-b border-cloud bg-white" aria-label="Key results">
          <div className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
            <div className="grid grid-cols-2 divide-x divide-cloud sm:grid-cols-4">
              {([
                ["$42k", "Avg. monthly revenue added"],
                ["< 5%", "Patient no show rate"],
                ["100%", "Cash-pay patient focus"],
                ["60 sec", "Intake protocol response"],
              ] as const).map(([value, label]) => (
                <div key={value} className="px-4 py-4 text-center sm:px-8">
                  <p className="text-3xl font-bold tracking-[-0.04em] text-obsidian sm:text-4xl">{value}</p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-fog">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GROWTH MODEL + PATHWAY (merged) ── */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">The growth model</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] text-obsidian sm:text-5xl">
              Move from one time visits to ongoing care.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-iron">
              The strongest practices don't just fill tomorrow's calendar. They build lasting relationships with patients through care that continues and revenue that compounds.
            </p>
          </div>

          {/* Contrast cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[36px] border border-cloud bg-white p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fog">The one time visit</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-graphite">A full calendar doesn't always mean a growing practice.</h3>
              <p className="mt-4 text-base leading-relaxed text-iron">
                Discounts and one time treatments can bring patients through the door, but without a path to ongoing care, the relationship and the revenue end with the visit.
              </p>
              <ul className="mt-8 grid gap-3">
                {[
                  "Transactional patient relationships",
                  "Revenue tied to appointment volume",
                  "A calendar that starts over every month",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-iron">
                    <span className="mt-0.5 font-semibold text-ash" aria-hidden="true">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[36px] bg-obsidian p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ember">The continuity model</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">Turn exceptional care into a relationship that continues.</h3>
              <p className="mt-4 text-base leading-relaxed text-mist">
                We design GLP-1, HRT, and aesthetic memberships that give patients a reason to stay and your practice a recurring foundation for growth.
              </p>
              <ul className="mt-8 grid gap-3">
                {[
                  "Existing patients transitioned into ongoing care",
                  "New patients enrolled into monthly memberships",
                  "A recurring revenue base that compounds over time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mist">
                    <span className="mt-0.5 font-semibold text-ember" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pathway steps */}
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-cloud bg-cloud sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.label} className="bg-white p-6">
                <span className="text-xs font-bold tracking-[0.12em] text-ember">{step.label} — {step.title}</span>
                <h3 className="mt-3 text-sm font-bold text-graphite">{step.subtitle}</h3>
                <p className="mt-2 text-xs leading-relaxed text-fog">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="border-y border-cloud bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Practice results</p>
              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] text-obsidian sm:text-5xl">
                What practice owners say after 90 days.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="flex flex-col rounded-[36px] border border-cloud bg-paper p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-6 flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-ember" />
                    ))}
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-iron">"{t.quote}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${t.avatarBg} text-xs font-bold text-white`}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-graphite">{t.name}</p>
                      <p className="text-xs text-fog">{t.role} · {t.practice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Investment frameworks</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-obsidian sm:text-5xl">
              Three levels of clinical growth support.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-iron">
              Start with what your practice can absorb today. Expand as the revenue base grows.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-[36px] border border-cloud bg-white p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fog">Core visibility</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-[-0.05em] text-obsidian">$2,500–$3,000</span>
                <span className="pb-1 text-sm text-fog">/mo</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-iron">
                For practices ready to improve local visibility and attract qualified patients for core aesthetic procedures.
              </p>
              <ul className="mt-8 flex-1 grid gap-3 text-sm text-iron">
                {[
                  "Neurotoxin maintenance and RF microneedling patient acquisition",
                  "Google Practice Profile management and optimization",
                  "60 second automated patient intake protocol",
                  "Post procedure reputation and review generation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex-shrink-0 font-bold text-ember">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full border-2 border-obsidian bg-white py-3.5 text-sm font-bold text-obsidian transition hover:bg-obsidian hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                Get started
              </Link>
            </div>
            <div className="flex flex-col rounded-[36px] bg-obsidian p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">High-LTV continuity</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-[-0.05em] text-white">$4,500–$5,000</span>
                <span className="pb-1 text-sm text-mist">/mo</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
                For practices ready to build a recurring revenue base through GLP-1, HRT, and aesthetic membership programs.
              </p>
              <ul className="mt-8 flex-1 grid gap-3 text-sm text-mist">
                {[
                  "GLP-1, HRT, and tiered aesthetic membership programs",
                  "Everything in Core visibility",
                  "Clinical education content for membership enrollment",
                  "Care plan continuity architecture and automated billing",
                  "Quarterly inactive patient reengagement",
                  "Social media content editing. Up to 12 posts per month formatted and ready to publish",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="flex-shrink-0 font-bold text-ember">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-ember py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(255,90,0,0.4)] transition hover:-translate-y-0.5 hover:bg-[#e64e00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                Book a practice audit
              </Link>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="mt-6 rounded-[36px] border border-cloud bg-white p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fog">Complete growth system</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-bold tracking-[-0.04em] text-obsidian">$7,000–$9,000</span>
                  <span className="pb-1 text-sm text-fog">/mo</span>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-iron">
                  For any practice ready to build a fully branded clinical education library, equip their team with custom training content, and hand off social media entirely.
                </p>
              </div>
              <Link
                href="/booking"
                className="mt-1 inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-obsidian bg-white px-6 py-3 text-sm font-bold text-obsidian transition hover:bg-obsidian hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                Schedule a call →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 border-t border-cloud pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["White Label Education Materials", "Practice branded clinical education content. Care plan onboarding guides, protocol explainers, and patient ready resources customized to your brand."],
                ["Custom Staff Training Videos", "Professionally produced internal training videos tailored to your protocols. For care coordinators, front desk, and providers."],
                ["Full Social Media Management", "End to end management across Instagram, Facebook, and TikTok. Content creation, scheduling, captions, and multiplatform community engagement."],
                ["Everything in High-LTV Continuity", "All patient acquisition programs, clinical education enrollment sequences, care plan architecture, and quarterly reengagement included."],
              ].map(([title, body]) => (
                <div key={title}>
                  <p className="text-sm font-bold text-graphite">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-fog">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise / multi-location note */}
          <p className="mt-6 text-center text-sm text-fog">
            Multi-location or enterprise scale?{" "}
            <Link href="/booking" className="font-semibold text-iron underline underline-offset-4 transition hover:text-ember">
              Contact us for custom pricing →
            </Link>
          </p>
        </section>

        {/* ── GOOGLE REVIEWS ── */}
        <section className="border-y border-cloud bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="mb-10 flex items-center gap-4">
              <GoogleIcon />
              <div>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-[#FBBC05]" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-graphite">5.0</span>
                  <span className="text-sm text-fog">· Google Reviews</span>
                </div>
                <p className="mt-0.5 text-xs text-fog">Rated 5 stars by medspa owners across the United States</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {googleReviews.map((r) => (
                <div key={r.name} className="rounded-2xl border border-cloud bg-paper p-5 transition hover:border-mist hover:shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cloud text-xs font-bold text-graphite">
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-graphite">{r.name}</p>
                      <p className="text-xs text-fog">{r.time}</p>
                    </div>
                  </div>
                  <div className="mb-3 flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 fill-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-iron">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVENUE CALCULATOR ── */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Revenue potential</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-obsidian sm:text-5xl">
                What would a monthly care plan base look like?
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-iron">
                Adjust the number of active care plan patients to project annual recurring revenue. GLP-1 and HRT protocols typically run $300–$600 per patient per month.
              </p>
              <p className="mt-4 text-xs text-fog">Based on an illustrative $500/month care plan. Individual results will vary.</p>
            </div>
            <RevenueCalculator />
          </div>
        </section>

        {/* ── WHY DELYTICA ── */}
        <section id="about" className="border-y border-cloud bg-[#fafafa]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Why Delytica</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-obsidian sm:text-5xl">
                  A growth partner built around patient quality.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-iron">
                  Delytica helps practices move from volatile single visit revenue toward a qualified, educated patient base that supports better clinical outcomes and better economics.
                </p>
                <Link
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ember hover:underline"
                >
                  Request a practice audit
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="grid gap-5">
                {[
                  [
                    "Higher quality candidates",
                    "Reach patients seeking long term health transformation, not a promotional discount. Higher intent leads to higher retention and a better clinical relationship.",
                  ],
                  [
                    "Protected provider schedules",
                    "Education first enrollment means patients arrive understanding the protocol. Providers spend less time on basic FAQs and more time delivering care.",
                  ],
                  [
                    "Compounding patient relationships",
                    "Care plan architecture increases the clinical value of each patient over time, turning a quarterly injection visit into a multiyear wellness relationship.",
                  ],
                ].map(([title, body]) => (
                  <div key={title} className="flex gap-5 rounded-2xl border border-cloud bg-white p-6 shadow-sm">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-ember" aria-hidden="true" />
                    <div>
                      <h3 className="text-base font-bold text-graphite">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-iron">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">Common questions</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] text-obsidian sm:text-5xl">
                Questions practice owners ask first.
              </h2>
            </div>
            <div className="divide-y divide-cloud border-y border-cloud">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-graphite [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="flex-shrink-0 text-2xl font-normal text-ember transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-iron">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section id="contact" className="bg-obsidian">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(255,90,0,0.12),transparent)]" aria-hidden="true" />
            <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Free practice audit</span>
              </div>
              <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Replace volatile revenue with predictable care plans.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
                Book a 15 minute practice capacity review. We will assess your current patient flow and map the care plan program your team can support.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-8 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(255,90,0,0.5)] transition hover:-translate-y-0.5 hover:bg-[#e64e00] hover:shadow-[0_8px_40px_rgba(255,90,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
                >
                  Book a Free Practice Audit
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="text-sm text-mist">Free 15 min call · No long term contracts</span>
              </div>
              <div className="mt-16 flex items-center justify-center gap-3">
                <Image src="/images/delytica_logo.png" alt="Delytica" width={28} height={28} className="opacity-60" />
                <span className="text-sm font-semibold tracking-[0.08em] text-mist opacity-60">Delytica</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

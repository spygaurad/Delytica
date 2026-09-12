import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Delytica is a founder-led MedSpa growth agency built on the belief that automation should come before advertising. HIPAA-eligible infrastructure, month-to-month contracts, results first.",
  alternates: { canonical: "https://delytica.agency/about" },
};

const values = [
  {
    title: "The care layer first",
    body: "Most agencies want to sell you advertising on day one. We believe you shouldn't pay to fill a leaky bucket. The intelligent care layer comes first — then you pour fuel on it.",
  },
  {
    title: "Results that tie to revenue",
    body: "We don't report on impressions or clicks. We report on recovered appointments, reactivated patients, and prevented no-shows — numbers with a direct line to your practice's income.",
  },
  {
    title: "No lock-in. No fluff.",
    body: "Month-to-month on the Foundation tier. A proven system deployed without reinvention. We built the model to stay lean so that value compounds with scale — not headcount.",
  },
  {
    title: "Built for this vertical",
    body: "We specialize in med spas and aesthetic medicine. That means HIPAA-eligible infrastructure as a default, communication templates built around patient norms, and pricing anchored to the economics of a practice.",
  },
];

const marketStats = [
  { value: "$9.3B", label: "US market size in 2026" },
  { value: "11,000+", label: "Med spa locations in the US" },
  { value: "15.2%", label: "Projected annual growth (CAGR)" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <>
        <section className="bg-plum-deep text-white py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="font-serif italic text-eggshell/40 text-sm mb-6">About Delytica</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal mb-5 max-w-2xl mx-auto leading-tight">
              We built the agency we wished existed
            </h1>
            <p className="text-eggshell/50 max-w-xl mx-auto text-[15px] lg:text-[17px] leading-relaxed">
              Most marketing agencies want a retainer before they&apos;ve proved
              anything. We start by making your existing operation airtight —
              then grow from there.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <p className="font-serif italic text-mist text-sm mb-6">The problem</p>
              <h2 className="font-serif text-3xl font-normal mb-6 leading-snug">
                What we keep seeing
              </h2>
              <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed mb-5">
                The med spa industry is growing fast — an estimated $9.3B in 2026,
                projected to reach $33.2B by 2035. But most single-location
                practices are dramatically under-served when it comes to patient
                care between visits. The same gaps show up everywhere: unanswered
                calls, no-shows without any reminder system, patient lists that go
                cold after the first visit.
              </p>
              <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed mb-5">
                On one end, cheap entry-tier tools offer automation without
                strategy. On the other, full-service agencies charge $1,500–$6,500
                a month — a number most owner-operators won&apos;t sign before they
                trust you.
              </p>
              <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">
                Delytica fills the gap. A low-friction entry product that proves
                value fast — so by the time a practice is ready for advertising and
                content, there&apos;s already a foundation of trust in the system
                underneath it.
              </p>
            </div>
            <div>
              <p className="font-serif italic text-mist text-sm mb-6">How we operate</p>
              <h2 className="font-serif text-3xl font-normal mb-6 leading-snug">
                Founder-led and intentionally lean
              </h2>
              <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed mb-5">
                Phase 1 is intentionally lean: the Foundation tier deployed via a
                pre-built, proven system — with zero per-client customization and
                async-only support. That model lets us price at the top of the
                entry band while keeping margin strong enough to reinvest.
              </p>
              <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed mb-5">
                Every client operates on HIPAA-eligible infrastructure from day
                one. No add-ons, no tiers within tiers. If you work in patient
                care, you need that standard — so we built it into the baseline.
              </p>
              <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">
                Phase 2 begins when the Foundation tier has 8–10 renewing clients
                past month 2. That&apos;s the proof point that unlocks hiring and
                the Growth tier — not before.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-eggshell border-y border-parchment py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-serif italic text-mist text-sm mb-5">Our principles</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                What we stand for
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <FadeIn key={v.title}>
                  <div className="bg-white rounded-2xl p-8 border border-parchment">
                    <h3 className="font-medium text-[17px] mb-3">{v.title}</h3>
                    <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">{v.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="font-serif italic text-mist text-sm mb-5">The opportunity</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-5">
            The market timing
          </h2>
          <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed max-w-xl mx-auto mb-16">
            The US med spa market has over 11,000 locations and is growing at
            15.2% CAGR. Most are owner-operated, under-served between patient
            visits, and generating preventable revenue losses. The window to
            build relationships in this vertical — before it becomes crowded —
            is open now.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {marketStats.map((s) => (
              <div key={s.value}>
                <div className="font-serif text-3xl font-normal text-plum-deep mb-2">
                  {s.value}
                </div>
                <div className="text-[12px] text-mist leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-plum-deep text-white">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="font-serif italic text-eggshell/40 text-sm mb-6">Join us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-5 leading-snug">
              Want to be one of our first 15 clients?
            </h2>
            <p className="text-eggshell/50 text-[15px] lg:text-[17px] mb-10 leading-relaxed max-w-sm mx-auto">
              We&apos;re in Phase 1 — growing through warm introductions. Setup
              fees are waived for founding clients. If someone in your network
              referred you, mention them on the call.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-rosewood text-white font-medium px-10 py-4 rounded-full hover:bg-rosewood-dark transition-colors text-[15px] tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-plum-deep"
            >
              Book a discovery call
            </Link>
          </div>
        </section>
      </>
    </PageTransition>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three levels of done-for-you care for med spas — from automation essentials to full-service growth partnership. Every service protects revenue and deepens patient relationships.",
  alternates: { canonical: "https://luminamedspa.agency/services" },
};

const tiers = [
  {
    num: "01",
    name: "Practice Essentials",
    tag: "The foundation every practice deserves",
    description:
      "The invisible care layer that should already exist in every med spa — installed in days, not months. It works quietly in the background, so no patient interaction falls through the cracks.",
    services: [
      {
        name: "Instant Patient Response",
        detail:
          "When a call goes unanswered, a message goes out automatically — before the patient calls a competitor. First response wins.",
      },
      {
        name: "Appointment Care Sequences",
        detail:
          "Tiered touchpoints leading up to every appointment that dramatically reduce no-shows. The right message, at the right time, every time.",
      },
      {
        name: "Appointment Recovery",
        detail:
          "When a patient misses, a gentle, well-timed sequence follows — to reschedule before the relationship fades.",
      },
      {
        name: "Reputation Cultivation",
        detail:
          "Post-visit prompts, sent at precisely the right moment, that turn satisfied patients into public advocates.",
      },
      {
        name: "Patient Reactivation",
        detail:
          "Monthly outreach to patients who haven't returned. The 37% who simply needed an invitation to come back.",
      },
      {
        name: "Unified Patient Communications",
        detail:
          "Every patient message — text, email, web — in one place for your front desk. No more scattered inboxes.",
      },
    ],
    highlight: true,
  },
  {
    num: "02",
    name: "Practice Growth",
    tag: "For practices ready to actively fill their calendar",
    description:
      "Everything in Practice Essentials, plus the content and advertising layer that turns your protected revenue base into active growth. For practices that have seen the foundation work and want to accelerate.",
    services: [
      {
        name: "Rebooking Sequences",
        detail:
          "Intelligent follow-ups that prompt patients to return before they go cold. The best time to invite a rebook is before the patient decides not to.",
      },
      {
        name: "Membership Growth Campaigns",
        detail:
          "Care sequences that convert single-visit patients into recurring members — the most valuable patients your practice can have.",
      },
      {
        name: "Social Content",
        detail:
          "8–12 on-brand posts per month, handled. A consistent social presence without the overhead of managing it yourself.",
      },
      {
        name: "Platform Advertising",
        detail:
          "Single-channel ad management — Meta or Google — with strategy and execution handled. You fund the spend; we run it.",
      },
      {
        name: "Priority Support",
        detail:
          "Faster response windows and a dedicated point of contact for your account.",
      },
    ],
    highlight: false,
  },
  {
    num: "03",
    name: "Full Partnership",
    tag: "Your outsourced growth team",
    description:
      "The complete picture — care intelligence, content, and advertising managed together. The result of a full-service growth agency, at a fraction of what one costs independently.",
    services: [
      {
        name: "Dual-Channel Advertising",
        detail:
          "Meta and Google managed together. Coordinated strategy, unified reporting, full execution.",
      },
      {
        name: "Custom Content Production",
        detail:
          "Photography direction, copy, and design — not templated. Content that reflects what your practice actually is.",
      },
      {
        name: "Booking Funnel Optimization",
        detail:
          "Landing page and booking funnel audits tied to actual consult rates — not impressions or traffic.",
      },
      {
        name: "Monthly Performance Reporting",
        detail:
          "Reporting tied to booked consults and recovered revenue. The numbers that matter to a practice owner.",
      },
      {
        name: "Dedicated Account Contact",
        detail:
          "One person for everything — strategy, billing, escalation, and relationship. The partner experience.",
      },
    ],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <>
      {/* Header */}
      <section className="bg-[#160E3C] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#9B8DFF] text-xs uppercase tracking-[0.2em] mb-6">
            The Practice
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal mb-5 max-w-2xl mx-auto leading-tight">
            What a Delytica practice looks like
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-[15px] lg:text-[17px] leading-relaxed">
            Three levels of care. Each one builds on the last. Every service
            exists to deepen patient relationships and protect the revenue your
            practice already generates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/pricing"
              className="bg-[#9B8DFF] text-white font-medium px-8 py-3.5 rounded-full hover:bg-white hover:text-[#160E3C] transition-colors text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#160E3C]"
            >
              See Pricing
            </Link>
            <Link
              href="/booking"
              className="border border-white/20 text-white px-8 py-3.5 rounded-full hover:border-[#9B8DFF]/50 hover:text-[#9B8DFF] transition-colors text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8DFF]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Service tiers */}
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-6">
        {tiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 80}>
            <div
              className={`rounded-2xl border overflow-hidden ${
              tier.highlight ? "border-[#9B8DFF]" : "border-[#DDD8FF]"
            }`}
          >
            {/* Header */}
            <div
              className={`px-8 py-7 flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                tier.highlight ? "bg-[#6B5CE7]" : "bg-white"
              }`}
            >
              <div>
                <div
                  className={`text-xs font-mono tracking-[0.15em] mb-2 ${
                    tier.highlight ? "text-white/60" : "text-[#9184C4]"
                  }`}
                >
                  {tier.num}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal mb-1">
                  {tier.name}
                </h2>
                <p
                  className={`text-[13px] ${
                    tier.highlight ? "text-white/60" : "text-[#9184C4]"
                  }`}
                >
                  {tier.tag}
                </p>
              </div>
              <Link
                href="/pricing"
                className={`self-start text-[13px] px-5 py-2 rounded-full border transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8DFF] ${
                  tier.highlight
                    ? "border-white/40 text-white hover:border-white"
                    : "border-[#DDD8FF] text-[#6B6898] hover:border-[#9B8DFF] hover:text-[#9B8DFF]"
                }`}
              >
                See pricing →
              </Link>
            </div>

            {/* Body */}
            <div className="bg-white px-8 py-8">
              <p className="text-[15px] lg:text-[17px] text-[#6B6898] leading-relaxed mb-8 max-w-2xl">
                {tier.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tier.services.map((s) => (
                  <div
                    key={s.name}
                    className="workflow-card rounded-xl border border-[#DDD8FF] p-5"
                  >
                    <div className="font-medium text-[15px] mb-2 flex items-start gap-2">
                      <span className="text-[#9184C4] mt-1 text-[10px] flex-shrink-0">
                        —
                      </span>
                      {s.name}
                    </div>
                    <p className="text-[13px] lg:text-[14px] text-[#6B6898] leading-relaxed pl-4">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#F0EDFF] border-t border-[#DDD8FF]">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
          <p className="text-[#9184C4] text-xs uppercase tracking-[0.2em] mb-6">
            Next step
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-5">
            Want to see the full picture?
          </h2>
          <p className="text-[#6B6898] text-[15px] mb-10 leading-relaxed max-w-sm mx-auto">
            Pricing for every tier, multi-location volume rates, and what
            you&apos;re committing to — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-block bg-[#6B5CE7] text-white font-medium px-10 py-4 rounded-full hover:bg-[#5A4BD0] transition-colors text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7] focus-visible:ring-offset-2"
            >
              View Pricing
            </Link>
            <Link
              href="/booking"
              className="inline-block border border-[#6B5CE7]/30 text-[#160E3C] font-medium px-10 py-4 rounded-full hover:border-[#6B5CE7] hover:text-[#6B5CE7] transition-colors text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7]"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
      </>
    </PageTransition>
  );
}

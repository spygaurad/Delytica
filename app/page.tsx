import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  alternates: { canonical: "https://luminamedspa.agency" },
};

const stats = [
  { value: "17–22%", label: "No-show rate in practices without a care sequence" },
  { value: "37%", label: "First-visit patients who never return without follow-up" },
  { value: "~3 clients", label: "To recover the full cost of the Foundation tier" },
];

const gaps = [
  {
    num: "01",
    title: "The Unanswered Call",
    body: "Every call that goes unanswered reaches a competitor next. An instant, personal response — even when your team is with someone — changes that outcome.",
  },
  {
    num: "02",
    title: "The Empty Chair",
    body: "No-shows are a structural problem, not a patient problem. Well-timed care sequences before each appointment prevent most of them before they happen.",
  },
  {
    num: "03",
    title: "The Patient Who Stopped Coming",
    body: "Most first-visit patients don't return — not because they were unhappy, but because no one invited them back. Reactivation closes that gap, quietly.",
  },
];

const tiers = [
  {
    name: "Practice Essentials",
    price: "$297",
    period: "/month",
    tag: "Where every practice starts",
    features: [
      "Instant patient response",
      "Appointment care sequences",
      "Appointment recovery",
      "Reputation cultivation",
      "Patient reactivation",
      "Unified patient communications",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Practice Growth",
    price: "$697–$1,200",
    period: "/month",
    tag: "Fill your calendar",
    features: [
      "Everything in Essentials",
      "Rebooking sequences",
      "Membership growth campaigns",
      "8–12 social posts/month",
      "Single-platform advertising",
      "Priority support",
    ],
    cta: "Learn More",
    highlight: false,
  },
  {
    name: "Full Partnership",
    price: "$1,800–$3,500",
    period: "/month",
    tag: "Your outsourced growth team",
    features: [
      "Everything in Growth",
      "Meta + Google advertising",
      "Custom content production",
      "Booking funnel optimization",
      "Monthly performance reporting",
      "Dedicated account contact",
    ],
    cta: "Apply Now",
    highlight: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "30 minutes to map your practice's current gaps and confirm we're a fit.",
  },
  {
    num: "02",
    title: "Configuration",
    body: "We build your account, connect your phone number, and sync your calendar.",
  },
  {
    num: "03",
    title: "Go Live",
    body: "Your care system launches — proven, pre-built, and running within days.",
  },
  {
    num: "04",
    title: "The Quiet Return",
    body: "No-shows drop. Missed calls convert. Dormant patients come back.",
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      <>
        {/* Hero */}
        <section className="bg-[#160E3C] text-white min-h-[88vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_#231660_0%,_transparent_70%)]" />
          <div className="relative max-w-5xl mx-auto px-6 py-32 text-center w-full">
            <div className="hero-badge inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-[#9B8DFF]/25 text-[#9B8DFF] text-xs uppercase tracking-[0.2em]">
              Patient Care Intelligence &nbsp;·&nbsp; Med Spa Growth
            </div>
            <h1 className="hero-headline font-serif text-4xl sm:text-5xl md:text-[4.5rem] font-normal leading-[1.1] mb-8 max-w-4xl mx-auto">
              A practice that never lets{" "}
              <span className="text-[#9B8DFF] italic">
                a patient slip away
              </span>
            </h1>
            <p className="hero-body text-[#9E98C4] text-base sm:text-[17px] lg:text-[18px] max-w-xl mx-auto mb-12 leading-relaxed">
              Delytica builds the invisible care layer your med spa deserves — the touchpoints, recoveries, and reactivations that protect revenue and deepen patient relationships, without adding to your day.
            </p>
            <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-[#9B8DFF] text-white font-medium px-9 py-4 rounded-full hover:bg-white hover:text-[#160E3C] transition-colors text-[15px] tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#160E3C]"
              >
                Book a Free Discovery Call
              </Link>
              <Link
                href="/pricing"
                className="border border-white/20 text-white px-9 py-4 rounded-full hover:border-[#9B8DFF]/50 hover:text-[#9B8DFF] transition-colors text-[15px] tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8DFF]"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-[#DDD8FF]">
          <FadeIn>
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD8FF] text-center">
              {stats.map((s) => (
                <div key={s.value} className="py-12 sm:px-12">
                  <div className="font-serif text-4xl font-normal text-[#160E3C] mb-2">
                    {s.value}
                  </div>
                  <div className="text-[13px] text-[#9184C4] leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* The Gap */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-28">
          <FadeIn>
            <div className="text-center mb-14 md:mb-20">
              <p className="text-[#9184C4] text-xs uppercase tracking-[0.2em] mb-5">
                The Gap
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight max-w-2xl mx-auto">
                What quietly costs every med spa
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {gaps.map((g, i) => (
              <FadeIn key={g.title} delay={i * 120}>
                <div>
                  <div className="text-[#9184C4] text-xs font-mono tracking-[0.15em] mb-6">
                    {g.num}
                  </div>
                  <h3 className="font-medium text-[17px] mb-4 leading-snug">{g.title}</h3>
                  <p className="text-[15px] lg:text-[17px] text-[#6B6898] leading-relaxed">{g.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* The Method */}
        <section className="bg-[#F0EDFF] border-y border-[#DDD8FF] py-16 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14 md:mb-20">
                <p className="text-[#9184C4] text-xs uppercase tracking-[0.2em] mb-5">
                  The Method
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal">
                  Inside your practice within days
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
              {steps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 90}>
                  <div>
                    <div className="text-[#9184C4] text-xs font-mono tracking-[0.15em] mb-5">
                      {s.num}
                    </div>
                    <h3 className="font-medium text-[15px] mb-3">{s.title}</h3>
                    <p className="text-[14px] lg:text-[15px] text-[#6B6898] leading-relaxed">{s.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* The Investment */}
        <section className="bg-[#160E3C] text-white py-16 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14 md:mb-20">
                <p className="text-[#9B8DFF] text-xs uppercase tracking-[0.2em] mb-5">
                  The Investment
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal">
                  Transparent, scalable pricing
                </h2>
                <p className="text-[#9E98C4] text-[15px] lg:text-[17px] mt-4 max-w-sm mx-auto leading-relaxed">
                  Start with the layer that proves itself. Build from there.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-8 flex flex-col ${
                      tier.highlight
                        ? "bg-[#6B5CE7] text-white"
                        : "bg-white/5 border border-white/10 text-white"
                    }`}
                  >
                    <div
                      className={`text-xs uppercase tracking-[0.18em] mb-4 ${
                        tier.highlight ? "text-white/60" : "text-[#9B8DFF]/70"
                      }`}
                    >
                      {tier.tag}
                    </div>
                    <h3 className="font-medium text-[17px] mb-5">{tier.name}</h3>
                    <div className="mb-7">
                      <span className="font-serif text-3xl font-normal">{tier.price}</span>
                      <span
                        className={`text-[14px] ml-1 ${
                          tier.highlight ? "text-white/60" : "text-white/40"
                        }`}
                      >
                        {tier.period}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className={`text-[14px] lg:text-[15px] flex items-start gap-3 ${
                            tier.highlight ? "text-white/85" : "text-white/70"
                          }`}
                        >
                          <span
                            className={`mt-0.5 text-[10px] flex-shrink-0 ${
                              tier.highlight ? "text-white/50" : "text-[#9B8DFF]/60"
                            }`}
                          >
                            —
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/booking"
                      className={`text-center text-[14px] font-medium px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        tier.highlight
                          ? "bg-white text-[#6B5CE7] hover:bg-white/90"
                          : "border border-white/20 text-white hover:border-[#9B8DFF] hover:text-[#9B8DFF]"
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="text-center mt-10">
                <Link
                  href="/pricing"
                  className="text-[#9B8DFF]/70 text-[13px] tracking-wide hover:text-[#9B8DFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8DFF] rounded"
                >
                  Full pricing breakdown including multi-location plans →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 py-20 md:py-32 text-center">
          <FadeIn>
            <p className="text-[#9184C4] text-xs uppercase tracking-[0.2em] mb-6">
              Begin
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal mb-6 leading-tight">
              Ready to build a practice that remembers?
            </h2>
            <p className="text-[#6B6898] text-[15px] lg:text-[17px] mb-12 leading-relaxed max-w-sm mx-auto">
              A free 30-minute call. No pitch. We&apos;ll map your practice&apos;s gaps and tell
              you honestly what will move the needle — and what won&apos;t.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-[#6B5CE7] text-white font-medium px-10 py-4 rounded-full hover:bg-[#5A4BD0] transition-colors text-[15px] tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7] focus-visible:ring-offset-2"
            >
              Book Your Free Discovery Call
            </Link>
          </FadeIn>
        </section>
      </>
    </PageTransition>
  );
}

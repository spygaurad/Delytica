import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  alternates: { canonical: "https://delytica.agency" },
};

const stats = [
  { value: "17–22%", label: "avg. no-show rate without reminders" },
  { value: "37%", label: "of first-visit patients never return" },
  { value: "~3 clients", label: "to break even on Practice Essentials" },
];

const gaps = [
  {
    title: "The unanswered call",
    body: "Unanswered calls go straight to a competitor. We respond instantly — even when your team is occupied.",
  },
  {
    title: "The empty chair",
    body: "No-shows aren't a patient problem — they're a systems problem. The right reminder, timed right, prevents most of them.",
  },
  {
    title: "The patient who stopped coming",
    body: "Most first-visit patients vanish — not because they were unhappy, but because no one followed up. We fix that.",
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
    highlight: false,
  },
];

const steps = [
  {
    title: "Discovery call",
    body: "30 minutes. We map your gaps — you decide if we're a fit.",
  },
  {
    title: "Configuration",
    body: "We set up your account and sync your calendar. No technical work on your end.",
  },
  {
    title: "Go live",
    body: "Pre-built, proven system. You're running within days, not weeks.",
  },
  {
    title: "The quiet return",
    body: "No-shows drop. Missed calls convert. Dormant patients come back.",
  },
];

const values = [
  {
    title: "The care layer first",
    body: "Don't pay to fill a leaky bucket. We plug the holes first — then help you grow.",
  },
  {
    title: "Results tied to revenue",
    body: "We report on recovered appointments and prevented no-shows. Not impressions. Not clicks.",
  },
];

const marketStats = [
  { value: "$9.3B", label: "US market size in 2026" },
  { value: "11,000+", label: "Med spa locations in the US" },
  { value: "15.2%", label: "Projected annual growth (CAGR)" },
];

export default function HomePage() {
  return (
    <PageTransition>
      <>
        {/* ── Hero ────────────────────────────────────────── */}
        <section id="home" className="bg-plum-deep text-white min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,_#2C2742_0%,_transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto px-6 py-32 text-center w-full">
            <h1 className="hero-headline font-serif text-4xl sm:text-5xl md:text-[4.75rem] font-normal leading-[1.08] mb-8 max-w-3xl mx-auto">
              A practice that never lets{" "}
              <em className="text-rosewood not-italic">
                a patient slip away
              </em>
            </h1>
            <p className="hero-body text-eggshell/60 text-base sm:text-[17px] lg:text-[18px] max-w-lg mx-auto mb-12 leading-relaxed">
              Automated follow-ups, no-show prevention, and patient reactivation — running quietly so nothing falls through the cracks.
            </p>
            <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-rosewood text-white font-medium px-9 py-4 rounded-full hover:bg-rosewood-dark transition-colors text-[15px] tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-plum-deep"
              >
                Book a free discovery call
              </Link>
              <a
                href="#pricing"
                className="border border-white/20 text-white px-9 py-4 rounded-full hover:border-rosewood/50 hover:text-rosewood transition-colors text-[15px] tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood"
              >
                See pricing
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────── */}
        <section className="bg-eggshell border-b border-parchment">
          <FadeIn>
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-parchment text-center">
              {stats.map((s) => (
                <div key={s.value} className="py-12 sm:px-12">
                  <div className="font-serif text-4xl font-normal text-plum-deep mb-2">
                    {s.value}
                  </div>
                  <div className="text-[13px] text-mist leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── Services ─────────────────────────────────────── */}
        <section id="services" className="bg-eggshell py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="mb-14">
                <p className="font-serif italic text-mist text-sm mb-4">What quietly costs every practice</p>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight max-w-2xl">
                  Three gaps. Every med spa has them.
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {gaps.map((g, i) => (
                <FadeIn key={g.title} delay={i * 100}>
                  <div>
                    <h3 className="font-medium text-[17px] mb-3 leading-snug">{g.title}</h3>
                    <p className="text-[15px] lg:text-[16px] text-ink/65 leading-relaxed">{g.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────── */}
        <section className="bg-plum-mid text-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="mb-12">
                <p className="font-serif italic text-eggshell/40 text-sm mb-4">The process</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal">
                  Live inside your practice in days
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
              {steps.map((s, i) => (
                <FadeIn key={s.title} delay={i * 80}>
                  <div>
                    <div className="text-rosewood/60 text-xs font-mono tracking-[0.15em] mb-4">
                      0{i + 1}
                    </div>
                    <h3 className="font-medium text-[15px] mb-2.5 text-eggshell">{s.title}</h3>
                    <p className="text-[14px] text-eggshell/50 leading-relaxed">{s.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────── */}
        <section id="pricing" className="bg-plum-deep text-white py-16 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-14 md:mb-20">
                <p className="font-serif italic text-eggshell/40 text-sm mb-5">The investment</p>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal">
                  Transparent, scalable pricing
                </h2>
                <p className="text-eggshell/50 text-[15px] lg:text-[17px] mt-4 max-w-sm mx-auto leading-relaxed">
                  Start with the layer that proves itself. Build from there.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-8 flex flex-col ${
                      tier.highlight
                        ? "bg-rosewood text-white ring-2 ring-rosewood"
                        : "bg-white/5 border border-white/10 text-white"
                    }`}
                  >
                    <div
                      className={`font-serif italic text-[12px] mb-3 ${
                        tier.highlight ? "text-white/60" : "text-eggshell/40"
                      }`}
                    >
                      {tier.tag}
                    </div>
                    <h3 className="font-medium text-[16px] mb-5">{tier.name}</h3>
                    <div className="mb-7">
                      <span className="font-serif text-3xl font-normal">{tier.price}</span>
                      <span
                        className={`text-[13px] ml-1 ${
                          tier.highlight ? "text-white/60" : "text-eggshell/35"
                        }`}
                      >
                        {tier.period}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className={`text-[14px] flex items-start gap-3 ${
                            tier.highlight ? "text-white/85" : "text-eggshell/65"
                          }`}
                        >
                          <span
                            className={`mt-0.5 text-[10px] flex-shrink-0 ${
                              tier.highlight ? "text-white/50" : "text-rosewood/60"
                            }`}
                          >
                            —
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    {tier.highlight ? (
                      <p className="text-[11px] text-white/50 mb-5 leading-relaxed bg-white/10 rounded-xl px-4 py-3">
                        30-day guarantee — targets missed, setup fee refunded. No estimates.
                      </p>
                    ) : null}
                    <Link
                      href="/booking"
                      className={`text-center text-[13px] font-medium px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        tier.highlight
                          ? "bg-white text-rosewood-dark hover:bg-eggshell"
                          : "border border-white/20 text-white hover:border-rosewood hover:text-rosewood"
                      }`}
                    >
                      Book a discovery call
                    </Link>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <p className="text-center text-eggshell/30 text-[12px] mt-8">
                Multi-location? Setup discounts scale with you.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section id="about" className="bg-eggshell py-16 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="mb-14">
                <p className="font-serif italic text-mist text-sm mb-4">Who we are</p>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight max-w-2xl">
                  We built the agency we wished existed
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
              <FadeIn>
                <div>
                  <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed mb-5">
                    A $9.3B market growing at 15% annually — yet most practices still lose patients to unanswered calls, preventable no-shows, and cold patient lists. The gaps are structural and fixable.
                  </p>
                  <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">
                    We fix the foundation first and prove value within 30 days. When you&apos;re ready to grow, the infrastructure is already there.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="space-y-8">
                  {values.map((v) => (
                    <div key={v.title}>
                      <h3 className="font-medium text-[16px] mb-2">{v.title}</h3>
                      <p className="text-[15px] text-ink/65 leading-relaxed">{v.body}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Market stats */}
            <FadeIn>
              <div className="border-t border-parchment pt-12 grid grid-cols-3 gap-4 max-w-md">
                {marketStats.map((s) => (
                  <div key={s.value}>
                    <div className="font-serif text-3xl font-normal text-plum-deep mb-1.5">
                      {s.value}
                    </div>
                    <div className="text-[12px] text-mist leading-relaxed">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="bg-plum-mid text-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="mb-12">
                <p className="font-serif italic text-eggshell/40 text-sm mb-4">Get in touch</p>
                <h2 className="font-serif text-4xl sm:text-5xl font-normal text-eggshell">Let&apos;s talk</h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <FadeIn>
                <div className="space-y-8">
                  <div>
                    <p className="text-[15px] lg:text-[17px] text-eggshell/60 leading-relaxed mb-6">
                      30 minutes. No pitch. We&apos;ll tell you exactly what will move the needle — and what to skip.
                    </p>
                    <Link
                      href="/booking"
                      className="inline-block bg-rosewood text-white font-medium px-8 py-3.5 rounded-full hover:bg-rosewood-dark transition-colors text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood focus-visible:ring-offset-2 focus-visible:ring-offset-plum-mid"
                    >
                      Book a free discovery call
                    </Link>
                  </div>
                  <div className="border-t border-plum-border pt-8">
                    <p className="text-[13px] text-eggshell/35 mb-1">Or send a message directly</p>
                    <p className="text-[15px] text-eggshell/80">contact@delytica.com</p>
                    <p className="text-[12px] text-eggshell/30 mt-1">Response within 24 business hours</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <ContactForm dark />
              </FadeIn>
            </div>
          </div>
        </section>
      </>
    </PageTransition>
  );
}

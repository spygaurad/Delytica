import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for med spa automation — from $297/month for Practice Essentials to full growth partnership. No long-term contracts. 30-day money-back guarantee.",
  alternates: { canonical: "https://delytica.agency/pricing" },
};

const tiers = [
  {
    name: "Practice Essentials",
    badge: "Start here",
    price: "$297",
    period: "/month",
    setup: "$497 one-time setup",
    setupNote:
      "Founding offer: setup fee waived for the first 10–15 warm-network clients",
    guarantee:
      "30-day guarantee — if system-tracked bookings don't hit the agreed target, your setup fee is refunded. No estimates, no manual attribution.",
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
    badge: "Fill your calendar",
    price: "$697–$1,200",
    period: "/month",
    setup: "",
    setupNote: "",
    guarantee: "",
    features: [
      "Everything in Practice Essentials",
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
    badge: "Your outsourced growth team",
    price: "$1,800–$3,500",
    period: "/month",
    setup: "",
    setupNote: "",
    guarantee: "",
    features: [
      "Everything in Practice Growth",
      "Dual-channel advertising (Meta + Google)",
      "Custom content production",
      "Booking funnel optimization",
      "Monthly performance reporting",
      "Dedicated account contact",
    ],
    highlight: false,
  },
];

const multiLocation = [
  { range: "1st location", setup: "$497", monthly: "$297" },
  { range: "2nd–4th location", setup: "$297", monthly: "$247" },
  { range: "5th–9th location", setup: "$197", monthly: "$217" },
  { range: "10th+ location", setup: "$97–$147", monthly: "$187–$197" },
];

const faqs = [
  {
    q: "What does the 30-day guarantee actually cover?",
    a: "If the system-tracked bookings — recovered missed calls, reactivated patients, rescheduled no-shows — don't hit the agreed number within 30 days, we refund your setup fee. Attribution is based only on what the platform logs. No estimates.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No long-term contracts on Practice Essentials. Month-to-month after the setup fee. We earn your business by delivering results, not by locking you in.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are live within 3–5 business days after onboarding. Our system is pre-configured and proven — no custom build required.",
  },
  {
    q: "What infrastructure do you use?",
    a: "We operate on a purpose-built platform with HIPAA-eligible infrastructure included at every tier, from day one — not as a paid add-on.",
  },
  {
    q: "Does multi-location pricing include everything?",
    a: "Yes. Volume discounts apply to setup fees. Monthly rates per location stay close to list because the value delivered at each location doesn't shrink with scale. One consolidated invoice, itemized by location.",
  },
];

export default function PricingPage() {
  return (
    <PageTransition>
      <>
        <section className="bg-plum-deep text-white py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="font-serif italic text-eggshell/40 text-sm mb-6">The investment</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal mb-5">
              Transparent pricing.<br className="hidden sm:block" /> No surprises.
            </h1>
            <p className="text-eggshell/50 max-w-lg mx-auto text-[15px] lg:text-[17px] leading-relaxed">
              Start with the layer that proves itself. Every tier is designed to
              deliver measurable return before you commit to the next.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl flex flex-col ${
                  tier.highlight
                    ? "bg-plum-deep text-white ring-2 ring-rosewood"
                    : "bg-white border border-parchment text-ink"
                }`}
              >
                <div
                  className={`px-7 py-6 border-b ${
                    tier.highlight ? "border-white/10" : "border-parchment"
                  }`}
                >
                  <div
                    className={`font-serif italic text-[12px] mb-3 ${
                      tier.highlight ? "text-eggshell/40" : "text-mist"
                    }`}
                  >
                    {tier.badge}
                  </div>
                  <h2 className="font-medium text-[17px] mb-4">{tier.name}</h2>
                  <div>
                    <span className="font-serif text-4xl font-normal">{tier.price}</span>
                    <span
                      className={`text-[14px] ml-1.5 ${
                        tier.highlight ? "text-eggshell/40" : "text-mist"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  {tier.setup ? (
                    <div
                      className={`text-[12px] mt-1.5 ${
                        tier.highlight ? "text-eggshell/40" : "text-mist"
                      }`}
                    >
                      {tier.setup}
                    </div>
                  ) : null}
                </div>

                <div className="px-7 py-6 flex-1">
                  {tier.setupNote ? (
                    <div
                      className={`text-[12px] rounded-xl px-4 py-3 mb-5 leading-relaxed ${
                        tier.highlight
                          ? "bg-white/8 text-eggshell/55"
                          : "bg-eggshell text-mist border border-parchment"
                      }`}
                    >
                      {tier.setupNote}
                    </div>
                  ) : null}
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`text-[14px] lg:text-[15px] flex items-start gap-3 ${
                          tier.highlight ? "text-eggshell/75" : "text-ink/70"
                        }`}
                      >
                        <span
                          className={`mt-0.5 text-[10px] flex-shrink-0 ${
                            tier.highlight ? "text-rosewood/70" : "text-mist"
                          }`}
                        >
                          —
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-7 pb-7">
                  {tier.guarantee ? (
                    <div
                      className={`text-[12px] rounded-xl px-4 py-3 mb-5 leading-relaxed ${
                        tier.highlight
                          ? "bg-white/8 text-eggshell/50"
                          : "bg-eggshell text-mist border border-parchment"
                      }`}
                    >
                      {tier.guarantee}
                    </div>
                  ) : null}
                  <Link
                    href="/booking"
                    className={`block text-center text-[14px] font-medium px-6 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                      tier.highlight
                        ? "bg-rosewood text-white hover:bg-rosewood-dark focus-visible:ring-rosewood"
                        : "bg-rosewood text-white hover:bg-rosewood-dark focus-visible:ring-rosewood"
                    }`}
                  >
                    Book a discovery call
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-parchment bg-eggshell">
          <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="font-serif italic text-mist text-sm mb-5">Multiple locations</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-5 leading-snug">
                  Volume pricing for multi-location brands
                </h2>
                <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed mb-4">
                  The underlying infrastructure cost doesn&apos;t increase with each
                  location — so multi-location practices get disproportionate
                  value from the same system.
                </p>
                <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed mb-8">
                  Setup discounts scale with your footprint. Monthly rates stay
                  close to list. One consolidated invoice, itemized per location.
                </p>
                <Link
                  href="/booking"
                  className="inline-block bg-rosewood text-white font-medium px-8 py-3.5 rounded-full hover:bg-rosewood-dark transition-colors text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood focus-visible:ring-offset-2"
                >
                  Discuss your footprint
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-[14px] min-w-[340px]">
                  <thead>
                    <tr className="border-b-2 border-parchment text-left">
                      <th className="pb-3 font-medium text-[11px] tracking-[0.12em] text-mist">Locations</th>
                      <th className="pb-3 font-medium text-[11px] tracking-[0.12em] text-mist text-right">Setup</th>
                      <th className="pb-3 font-medium text-[11px] tracking-[0.12em] text-mist text-right">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {multiLocation.map((row, i) => (
                      <tr
                        key={row.range}
                        className={`border-b border-parchment ${
                          i === 0 ? "bg-rosewood/8" : ""
                        }`}
                      >
                        <td className="py-4 text-ink font-medium">{row.range}</td>
                        <td className="py-4 text-ink/60 text-right">{row.setup}</td>
                        <td className="py-4 text-ink/60 text-right">{row.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[12px] text-mist mt-4 leading-relaxed">
                  Volume rates are negotiated privately. List price remains $297/month flat for single-location clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-center mb-12">
            Pricing questions
          </h2>
          <div className="space-y-px">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-parchment py-7">
                <h3 className="font-medium text-[16px] mb-3">{item.q}</h3>
                <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-plum-deep text-white">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="font-serif italic text-eggshell/40 text-sm mb-6">Get started</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-5 leading-snug">
              Not sure which tier fits?
            </h2>
            <p className="text-eggshell/50 text-[15px] lg:text-[17px] mb-10 leading-relaxed max-w-sm mx-auto">
              Book a free call. We&apos;ll tell you honestly where you&apos;ll see
              the most return first — and what to skip for now.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-rosewood text-white font-medium px-10 py-4 rounded-full hover:bg-rosewood-dark transition-colors text-[15px] tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-plum-deep"
            >
              Book a free discovery call
            </Link>
          </div>
        </section>
      </>
    </PageTransition>
  );
}

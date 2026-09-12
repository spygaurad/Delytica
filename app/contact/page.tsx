"use client";

import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ContactForm from "@/components/ContactForm";

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

export default function ContactPage() {
  return (
    <PageTransition>
      <>
        <section className="bg-plum-deep text-white py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="font-serif italic text-eggshell/40 text-sm mb-6">Contact</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal mb-4">
              Let&apos;s talk
            </h1>
            <p className="text-eggshell/50 max-w-md mx-auto text-sm leading-relaxed">
              Have a question before booking? Send us a message — we respond
              within 24 business hours.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <div className="space-y-8 mb-14">
              <div>
                <p className="font-serif italic text-mist text-[12px] mb-2">Email</p>
                <p className="text-[15px] text-ink">hello@delytica.agency</p>
                <p className="text-xs text-mist mt-1">Response within 24 business hours</p>
              </div>
              <div>
                <p className="font-serif italic text-mist text-[12px] mb-2">Support</p>
                <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">
                  Async-only for Tier 1. Faster windows available for Tier 2 and 3 clients.
                </p>
              </div>
              <div>
                <p className="font-serif italic text-mist text-[12px] mb-3">Prefer to book directly?</p>
                <Link
                  href="/booking"
                  className="inline-block bg-rosewood text-white text-sm px-6 py-3 rounded-full hover:bg-rosewood-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood focus-visible:ring-offset-2"
                >
                  Book a free 30-min call
                </Link>
              </div>
            </div>

            <div>
              <p className="font-serif italic text-mist text-[12px] mb-6">Quick answers</p>
              <div className="space-y-6">
                {quickFaqs.map((item) => (
                  <div key={item.q} className="border-l-2 border-parchment pl-5">
                    <p className="text-[15px] lg:text-[17px] font-medium text-ink mb-1">{item.q}</p>
                    <p className="text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </section>
      </>
    </PageTransition>
  );
}

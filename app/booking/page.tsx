import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function BookingPage() {
  return (
    <PageTransition>
      <section className="flex min-h-[75vh] items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-ember text-xl text-ember">✓</div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-obsidian">We&apos;re just getting started.</h1>
          <p className="mt-6 text-sm leading-relaxed text-iron">You may be eligible for discounted case studies and testimonials. Reach out to your referrer or email us at <a href="mailto:contact@delytica.com" className="font-semibold text-ember hover:underline">contact@delytica.com</a>.</p>
          <Link href="/" className="mt-10 inline-flex rounded-[14px] bg-obsidian px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-graphite">Back to home</Link>
        </div>
      </section>
    </PageTransition>
  );
}

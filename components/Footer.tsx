import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/booking", label: "Book a Discovery Call" },
];

export default function Footer() {
  return (
    <footer className="bg-plum-deep text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/images/delytica_logo.png"
              alt="Delytica"
              width={38}
              height={38}
              className="object-contain"
            />
            <div>
              <div className="text-[15px] font-semibold tracking-[0.08em] uppercase leading-tight">
                Delytica
              </div>
              <div className="font-serif italic text-[12px] text-eggshell/40">
                MedSpa Growth Agency
              </div>
            </div>
          </div>
          <p className="text-[15px] text-eggshell/40 leading-relaxed">
            Done-for-you AI automation for med spas — eliminating no-shows, recovering missed calls, and reactivating dormant patients.
          </p>
        </div>

        <div>
          <h4 className="font-serif italic text-[13px] text-eggshell/40 mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-eggshell/40 hover:text-eggshell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif italic text-[13px] text-eggshell/40 mb-6">
            Get in touch
          </h4>
          <p className="text-[15px] text-eggshell/50 mb-1">contact@delytica.com</p>
          <p className="text-[13px] text-eggshell/25 mb-8">Response within 24 business hours</p>
          <Link
            href="/booking"
            className="inline-block bg-rosewood text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-rosewood-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood"
          >
            Book a free call
          </Link>
        </div>
      </div>

      <div className="border-t border-white/8 px-6 py-5 max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-xs text-white/25">
          © {new Date().getFullYear()} Delytica MedSpa Growth Agency
        </span>
        <span className="text-xs text-white/20">
          Built for med spa owners who are done leaving money on the table
        </span>
      </div>
    </footer>
  );
}

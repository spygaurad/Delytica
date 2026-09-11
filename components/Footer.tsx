import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book a Discovery Call" },
];

export default function Footer() {
  return (
    <footer className="bg-[#160E3C] text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image src="/images/delytica_logo.png" alt="Delytica" width={40} height={40} className="object-contain" />
            <div>
              <div className="text-[15px] font-semibold tracking-[0.1em] uppercase leading-tight">
                Delytica
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#9B8DFF]">
                MedSpa Growth Agency
              </div>
            </div>
          </div>
          <p className="text-[15px] text-white/40 leading-relaxed">
            Done-for-you AI automation for med spas — eliminating no-shows, recovering missed calls, and reactivating dormant patients.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9B8DFF] mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-white/40 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B8DFF] rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9B8DFF] mb-6">
            Get in Touch
          </h4>
          <p className="text-[15px] text-white/40 mb-1">hello@delytica.agency</p>
          <p className="text-[13px] text-white/25 mb-8">Response within 24 business hours</p>
          <Link
            href="/booking"
            className="inline-block bg-[#6B5CE7] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#8B7CF8] transition-colors"
          >
            Book a Free Call
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

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/#services", label: "The model" },
  { href: "/#pricing", label: "Frameworks" },
  { href: "/#about", label: "Why Delytica" },
  { href: "/booking", label: "Request an audit" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cloud bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/delytica_logo.png" alt="Delytica" width={36} height={36} />
            <span className="text-base font-semibold tracking-[0.08em] text-obsidian">Delytica</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog">
            High-LTV patient acquisition and continuity systems for medspas that want a steadier practice.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-fog">Navigate</h2>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm text-iron transition hover:text-ember">{link.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-fog">Contact</h2>
          <p className="mt-5 text-sm text-iron">contact@delytica.com</p>
          <p className="mt-2 text-xs leading-relaxed text-fog">Practice audits for medspa owners, medical directors, and practice managers.</p>
        </div>
      </div>
      <div className="border-t border-cloud px-6 py-5 text-center text-xs text-fog">© {new Date().getFullYear()} Delytica. Continuity growth for medspas.</div>
    </footer>
  );
}

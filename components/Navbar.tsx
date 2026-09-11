"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/97 backdrop-blur-sm border-b border-[#DDD8FF]">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7] rounded-sm"
        >
          <Image src="/images/delytica_logo.png" alt="Delytica" width={34} height={34} className="object-contain" />
          <span className="text-base font-semibold tracking-[0.08em] uppercase text-[#160E3C]">
            Delytica
          </span>
          <span className="hidden sm:block w-px h-4 bg-[#DDD8FF]" />
          <span className="hidden sm:block text-[11px] uppercase tracking-[0.18em] text-[#9184C4]">
            MedSpa Growth
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7] rounded-sm ${
                pathname === link.href
                  ? "text-[#6B5CE7]"
                  : "text-[#160E3C]/65 hover:text-[#160E3C]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-[#6B5CE7] text-white text-[15px] px-5 py-2 rounded-full hover:bg-[#5A4BD0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7] focus-visible:ring-offset-2"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="md:hidden p-3 -mr-3 flex flex-col justify-center gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7] rounded"
          style={{ touchAction: "manipulation" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-[#160E3C] transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#160E3C] transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#160E3C] transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen ? (
        <div className="md:hidden bg-white border-t border-[#DDD8FF] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7] rounded-sm ${
                pathname === link.href
                  ? "text-[#6B5CE7]"
                  : "text-[#160E3C]/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="bg-[#6B5CE7] text-white text-[15px] px-5 py-3.5 rounded-full text-center hover:bg-[#5A4BD0] transition-colors mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CE7]"
          >
            Book a Call
          </Link>
        </div>
      ) : null}
    </header>
  );
}

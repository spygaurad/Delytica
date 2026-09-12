"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const sections = [
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSectionClick(e: React.MouseEvent, id: string) {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
    }
  }

  function handleLogoClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-nav shadow-sm border-b border-parchment">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood rounded-sm"
        >
          <Image
            src="/images/delytica_logo.png"
            alt="Delytica"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-base font-semibold tracking-[0.07em] uppercase text-plum-deep">
            Delytica
          </span>
          <span className="hidden sm:block w-px h-4 bg-parchment" />
          <span className="hidden sm:block font-serif italic text-[12px] text-mist">
            MedSpa Growth
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleSectionClick(e, s.id)}
              className="text-[15px] text-ink/60 hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood rounded-sm"
            >
              {s.label}
            </a>
          ))}
          <Link
            href="/booking"
            className="bg-rosewood text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-rosewood-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood focus-visible:ring-offset-2 focus-visible:ring-offset-nav"
          >
            Book a call
          </Link>
        </div>

        <button
          className="md:hidden p-3 -mr-3 flex flex-col justify-center gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood rounded"
          style={{ touchAction: "manipulation" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-px bg-ink transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </nav>

      {menuOpen ? (
        <div className="md:hidden bg-nav border-t border-parchment px-6 py-6 flex flex-col gap-5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleSectionClick(e, s.id)}
              className="text-[15px] text-ink/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood rounded-sm"
            >
              {s.label}
            </a>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="bg-rosewood text-white text-[15px] font-medium px-5 py-3.5 rounded-full text-center hover:bg-rosewood-dark transition-colors mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosewood"
          >
            Book a call
          </Link>
        </div>
      ) : null}
    </header>
  );
}

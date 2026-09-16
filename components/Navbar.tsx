"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const sections = [
  { id: "services", label: "The model" },
  { id: "pricing", label: "Frameworks" },
  { id: "about", label: "Why Delytica" },
  { id: "contact", label: "Audit" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSectionClick(event: React.MouseEvent, id: string) {
    event.preventDefault();
    setMenuOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-cloud bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember">
          <Image src="/images/delytica_logo.png" alt="Delytica" width={34} height={34} className="object-contain" />
          <span className="text-base font-semibold tracking-[0.08em] text-ember">Delytica</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} onClick={(event) => handleSectionClick(event, section.id)} className="text-sm text-iron transition hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember">
              {section.label}
            </a>
          ))}
          <Link href="/booking" className="rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white shadow-[0_2px_12px_rgba(255,90,0,0.3)] transition hover:bg-[#e64e00] hover:shadow-[0_4px_20px_rgba(255,90,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2">
            Request an audit
          </Link>
        </div>

        <button type="button" className="rounded p-3 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          <span className="block h-px w-5 bg-obsidian" />
          <span className="mt-1.5 block h-px w-5 bg-obsidian" />
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-cloud bg-paper px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} onClick={(event) => handleSectionClick(event, section.id)} className="text-sm text-iron">
                {section.label}
              </a>
            ))}
            <Link href="/booking" onClick={() => setMenuOpen(false)} className="rounded-full bg-ember px-5 py-3 text-center text-sm font-bold text-white">
              Request an audit
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

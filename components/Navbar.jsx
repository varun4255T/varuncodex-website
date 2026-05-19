"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { BRAND, routes } from "@/data/brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/[0.78] backdrop-blur-2xl">
      <nav className="section-shell flex min-h-[var(--nav-height)] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={BRAND.logo}
            alt="VarunCodeX logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg object-contain shadow-glow"
            priority
          />
          <div>
            <p className="text-lg font-black leading-tight text-white">{BRAND.name}</p>
            <p className="text-xs font-semibold text-electric">{BRAND.tagline}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {routes.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href={BRAND.whatsappServices}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-electric/50 bg-electric px-4 py-2.5 text-sm font-bold text-midnight shadow-glow transition hover:bg-cyanGlow xl:inline-flex"
        >
          <MessageCircle size={17} />
          Chat on WhatsApp
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white xl:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-midnight/95 px-4 pb-5 xl:hidden">
          <div className="section-shell grid gap-2 pt-3">
            {routes.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.08]"
              >
                {label}
              </Link>
            ))}
            <Link
              href={BRAND.whatsappServices}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-electric px-4 py-3 text-center text-sm font-bold text-midnight"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

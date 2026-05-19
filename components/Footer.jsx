import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/data/brand";

const links = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["AI Vision", "/ai-vision"],
  ["Community", "/community"],
  ["Contact", "/contact"]
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div className="flex gap-4">
          <Image src={BRAND.logo} alt="VarunCodeX logo" width={58} height={58} className="h-14 w-14 rounded-lg object-contain" />
          <div>
            <h2 className="text-2xl font-black text-white">{BRAND.name}</h2>
            <p className="mt-1 text-sm font-semibold text-electric">{BRAND.tagline}</p>
            <p className="mt-4 max-w-xl break-all text-sm leading-6 text-slate-400">
              Founder: {BRAND.founder}<br />
              WhatsApp Business: {BRAND.phoneDisplay}<br />
              LinkedIn: {BRAND.linkedinDisplay}<br />
              Instagram: {BRAND.instagramDisplay}
            </p>
            <a href={BRAND.whatsappServices} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-black text-midnight transition hover:bg-cyanGlow">
              <MessageCircle size={17} />
              Let’s Build, Learn, Automate & Grow
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-electric/[0.45]">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

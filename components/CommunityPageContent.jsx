import { Bell, Briefcase, Code2, Cloud, Lightbulb, MessageCircle, Rocket, Sparkles } from "lucide-react";
import { BRAND, WHATSAPP_COMMUNITY_LINK } from "@/data/brand";

const cards = [
  ["Internship Alerts", Bell],
  ["Job Updates", Briefcase],
  ["Coding Tips", Code2],
  ["AI Tools Updates", Sparkles],
  ["Salesforce Guidance", Cloud],
  ["Web Development Learning", Code2],
  ["Startup Insights", Rocket],
  ["Tech Industry Trends", Lightbulb]
];

export default function CommunityPageContent() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, Icon]) => (
            <article key={title} className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-electric/45">
              <Icon size={30} className="text-electric" />
              <h2 className="mt-5 text-xl font-black text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Practical updates and learning signals for students, freshers, builders, and early-stage founders.
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 glass-panel rounded-lg p-7 text-center">
          <h2 className="text-2xl font-black text-white">Want personal guidance?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Book a paid consultation on WhatsApp for service planning, learning direction, startup mapping, or project guidance.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow">
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>
            <a href={BRAND.whatsappServices} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-black text-white transition hover:border-electric/50">
              <MessageCircle size={18} />
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

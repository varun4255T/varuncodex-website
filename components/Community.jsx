import { Bell, Briefcase, Code2, Cloud, Lightbulb, MessageCircle, Rocket, Sparkles, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { WHATSAPP_COMMUNITY_LINK } from "@/data/brand";

const benefits = [
  ["Internship alerts", Bell],
  ["Job updates", Briefcase],
  ["Coding tips", Lightbulb],
  ["AI tool updates", Sparkles],
  ["Salesforce and Web Development guidance", Cloud],
  ["Tech industry trends", Rocket],
  ["Startup insights", Users]
];

export default function Community() {
  return (
    <section id="community" className="py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
        <div>
          <SectionHeader
            kicker="Community"
            title="Join the VarunCodeX Community"
            copy="Join the VarunCodeX learning community to receive internship alerts, job updates, coding tips, AI tool updates, tech industry trends, startup insights, and Salesforce plus Web Development guidance."
          />
          <p className="mt-5 text-sm font-semibold text-slate-400">
            Free community support is available. Personal consultation calls and meetings are paid services.
          </p>
          <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow">
            <MessageCircle size={18} />
            Join WhatsApp Community
          </a>
        </div>
        <div className="glass-panel grid gap-3 rounded-lg p-6 sm:grid-cols-2">
          {benefits.map(([benefit, Icon]) => (
            <div key={benefit} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-4">
              <Icon size={18} className="text-electric" />
              <span className="text-sm font-bold text-slate-200">{benefit}</span>
            </div>
          ))}
          <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-electric/25 bg-electric/10 p-4 text-sm font-black text-cyanGlow transition hover:bg-electric hover:text-midnight">
            <Code2 size={18} />
            Join WhatsApp Community
          </a>
        </div>
      </div>
    </section>
  );
}

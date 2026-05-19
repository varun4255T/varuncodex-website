import { pricing } from "@/data/pricing";
import { IndianRupee, MessageCircle } from "lucide-react";
import { BRAND } from "@/data/brand";
import SectionHeader from "./SectionHeader";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white/[0.025] py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="Pricing"
          title="Professional starting points for practical services."
          copy="Pricing is shown clearly so students, startups, and businesses can choose the right first step without turning the brand into a discount menu."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pricing.map((group) => (
            <article key={group.category} className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-electric/[0.45]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-electric/25 bg-electric/10 text-electric">
                  <IndianRupee size={21} />
                </div>
                <h3 className="text-xl font-black text-white">{group.category}</h3>
              </div>
              <div className="space-y-3">
                {group.plans.map(([name, value]) => (
                  <div key={name} className="flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.07] p-4">
                    <span className="text-sm font-semibold text-slate-200">{name}</span>
                    <span className="text-right text-sm font-black text-cyanGlow">{value}</span>
                  </div>
                ))}
              </div>
              <a href={BRAND.whatsappServices} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-electric/35 bg-electric/10 px-4 py-3 text-sm font-black text-cyanGlow transition hover:bg-electric hover:text-midnight">
                <MessageCircle size={17} />
                Book Consultation
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

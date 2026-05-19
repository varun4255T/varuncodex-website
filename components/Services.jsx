import { services } from "@/data/services";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappMessageLink } from "@/data/brand";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="Services"
          title="Services designed for learning, launching, and operating smarter."
          copy="Each offer is practical, beginner-aware, and built around clear outcomes: better websites, stronger startup planning, useful automation, and career growth."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description, points, cta, inquiry }) => (
            <article key={title} className="group glass-panel flex min-h-[390px] flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-electric/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-electric/25 bg-electric/10 text-electric">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-electric" size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappMessageLink(inquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-electric/35 bg-electric/10 px-4 py-3 text-sm font-black text-cyanGlow transition hover:bg-electric hover:text-midnight"
              >
                <MessageCircle size={17} />
                {cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

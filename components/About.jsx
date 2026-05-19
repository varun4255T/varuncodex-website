import { BookOpenCheck, Building2, Rocket, Workflow } from "lucide-react";
import SectionHeader from "./SectionHeader";

const cards = [
  ["Students", "Learn practical technology skills through real project thinking.", BookOpenCheck],
  ["Startups", "Plan, position, and build digital products with clearer execution.", Rocket],
  ["Businesses", "Automate workflows and improve digital operations.", Building2],
  ["Developers", "Grow with AI, Salesforce, web development, cloud, and career support.", Workflow]
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="About VarunCodeX"
          title="A practical technology brand for builders, learners, and early-stage teams."
          copy="VarunCodeX provides modern technology solutions, coding education, startup consulting, AI automation guidance, and career development support."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, text, Icon]) => (
            <article key={title} className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-electric/[0.45]">
              <Icon className="mb-5 text-electric" size={32} />
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

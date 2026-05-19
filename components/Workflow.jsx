import { workflowSteps } from "@/data/workflow";
import SectionHeader from "./SectionHeader";

export default function Workflow() {
  return (
    <section id="workflow" className="bg-white/[0.025] py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="Workflow"
          title="From Idea to Intelligent Product"
          copy="A clear build path that turns raw ideas into structured modules, polished interfaces, automation logic, AI intelligence, and deployable products."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {workflowSteps.map((step) => (
            <article key={step.title} className="glass-panel relative rounded-lg p-5 transition duration-300 hover:-translate-y-2 hover:border-electric/[0.45]">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-electric/25 bg-electric/10 text-sm font-black text-cyanGlow">
                {String(step.id).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

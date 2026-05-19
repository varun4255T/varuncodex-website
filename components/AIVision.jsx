import { BrainCircuit, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const useCases = [
  "Lead scoring",
  "Healthcare risk analysis",
  "Smart recommendations",
  "Personalized learning",
  "Business automation",
  "AI-assisted development",
  "Agentic AI workflows",
  "Vibe coding-based prototyping",
  "Productivity automation"
];

const flow = ["Idea", "Prompt", "AI Builds", "Test", "Improve", "Deploy"];

export default function AIVision() {
  return (
    <section id="ai-vision" className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[.98fr_1.02fr]">
        <div>
          <SectionHeader
            kicker="AI Vision"
            title="Why AI Matters to VarunCodeX"
            copy="VarunCodeX is not only about coding. It focuses on building intelligent systems where AI helps users make better decisions, automate repetitive work, and convert ideas into working solutions."
          />
          <p className="mt-6 rounded-lg border border-electric/20 bg-electric/[0.08] p-5 leading-7 text-slate-200">
            Vibe coding helps transform ideas into prototypes using natural language prompts. Agentic AI goes one step further by planning, generating, testing, and improving workflows with less manual effort.
          </p>
        </div>
        <div className="glass-panel rounded-lg p-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-4">
                <BrainCircuit size={18} className="text-electric" />
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-lg border border-electric/25 bg-slate-950/70 p-5">
            <p className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-cyanGlow">
              <Zap size={16} />
              Intelligent build flow
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {flow.map((step, index) => (
                <div key={step} className="relative rounded-lg border border-white/10 bg-white/[0.07] p-4 text-center text-sm font-black text-white">
                  {step}
                  {index < flow.length - 1 ? <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-electric sm:block" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

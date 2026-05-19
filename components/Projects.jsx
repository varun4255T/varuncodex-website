import { projects } from "@/data/projects";
import { ArrowRight, Layers3, Sparkles } from "lucide-react";
import { whatsappMessageLink } from "@/data/brand";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="bg-white/[0.025] py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="Project Portfolio"
          title="AI-Driven Salesforce Project Portfolio"
          copy="These projects are designed for college submission, internship shortlisting, technical interviews, and project competitions. They are not basic CRUD projects; they demonstrate workflow-driven enterprise thinking."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="glass-panel rounded-lg p-7 transition duration-300 hover:-translate-y-2 hover:border-electric/50">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-electric/25 bg-electric/10 text-electric">
                  <Layers3 size={28} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-xs font-bold text-slate-300">
                  Case Study 0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-cyanGlow">Features</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.features.map((feature) => <li key={feature}>• {feature}</li>)}
                  </ul>
                </div>
                <div className="rounded-lg border border-electric/20 bg-electric/[0.08] p-4">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-cyanGlow">
                    <Sparkles size={16} />
                    AI Layer
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {project.aiLayer.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappMessageLink(`Hello VarunCodeX, I want to view the case study for ${project.title}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-black text-midnight transition hover:bg-cyanGlow">
                  View Case Study <ArrowRight size={17} />
                </a>
                <a href="/workflow" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm font-black text-white transition hover:border-electric/50">
                  See Workflow <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

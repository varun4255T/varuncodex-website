import Image from "next/image";
import { ArrowRight, BrainCircuit, Cloud, Code2, Cpu, LineChart, MessageCircle, Users } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { BRAND } from "@/data/brand";

const badges = ["AI Automation", "Salesforce Projects", "Web Development", "Career Growth", "Startup Consulting"];
const floating = [
  ["AI", BrainCircuit],
  ["Salesforce", LineChart],
  ["Web Dev", Code2],
  ["Cloud", Cloud],
  ["Career Growth", Users]
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-radial-tech pb-20 pt-32 md:pt-40">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-bold text-cyanGlow">
            <Cpu size={18} />
            Premium AI-tech brand by Varun Tripathi
          </div>
          <h1 className="text-5xl font-black leading-[1.02] text-white md:text-7xl">
            Building the Future of Learning, Automation & AI-Driven Tech Solutions
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            VarunCodeX helps students, startups, and businesses build websites, learn modern technologies, automate workflows, and grow with AI-powered systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/services">Explore Services</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">View Projects</ButtonLink>
            <ButtonLink href={BRAND.whatsappServices} variant="secondary">
              <MessageCircle size={18} className="mr-2" />
              Start a Project
            </ButtonLink>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 text-sm font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] reveal lg:min-h-[640px]">
          <div className="absolute left-8 top-0 z-10 flex items-center gap-3 rounded-lg border border-electric/25 bg-midnight/80 p-4 shadow-glow backdrop-blur-xl">
            <Image src={BRAND.logo} alt="VarunCodeX logo" width={62} height={62} className="h-16 w-16 rounded-lg object-contain" />
            <div>
              <p className="text-sm text-slate-400">Operating system</p>
              <p className="font-black text-white">VarunCodeX AI Lab</p>
            </div>
          </div>

          <div className="absolute inset-x-0 top-24 rounded-lg border border-white/[0.12] bg-gradient-to-br from-slate-900/90 via-slate-950/70 to-blue-950/60 p-5 shadow-glow backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-bold text-cyanGlow">Live AI Dashboard</p>
                <p className="text-xs text-slate-400">Learning, sales, automation, deployment</p>
              </div>
              <ArrowRight className="text-electric" />
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {["Lead Score 92", "Workflow Active", "Deploy Ready", "Learning Path"].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.07] p-4">
                  <div className="mb-4 h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-electric" style={{ width: `${88 - index * 11}%` }} />
                  </div>
                  <p className="text-sm font-bold text-white">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">Automated signal layer</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-electric/20 bg-electric/[0.08] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanGlow">Automation flow</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-white">
                {["Idea", "Prompt", "Build", "Deploy"].map((node, index) => (
                  <div key={node} className="flex items-center gap-3">
                    <span className="rounded-full border border-electric/[0.35] bg-midnight px-3 py-2">{node}</span>
                    {index < 3 ? <span className="h-px w-7 bg-electric/70" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {floating.map(([label, Icon], index) => (
            <div
              key={label}
              className="absolute rounded-lg border border-white/[0.12] bg-white/[0.09] px-4 py-3 shadow-card backdrop-blur-xl"
              style={{
                left: `${index % 2 === 0 ? 0 : 62}%`,
                top: `${index * 92 + 60}px`,
                animation: `float ${4.6 + index * 0.35}s ease-in-out infinite`
              }}
            >
              <div className="flex items-center gap-2 text-sm font-black text-white">
                <Icon size={17} className="text-electric" />
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Linkedin, Sparkles } from "lucide-react";
import ButtonLink from "./ButtonLink";
import SectionHeader from "./SectionHeader";
import { BRAND } from "@/data/brand";

export default function Founder() {
  return (
    <section className="py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[.86fr_1.14fr]">
        <div className="glass-panel rounded-lg p-8">
          <div className="relative mx-auto flex aspect-square max-w-[360px] items-center justify-center overflow-hidden rounded-lg border border-electric/25 bg-gradient-to-br from-electric/[0.18] to-white/5">
            <Image src={BRAND.logo} alt="VarunCodeX logo" width={220} height={220} className="h-56 w-56 object-contain" />
          </div>
          <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.07] p-5">
            <p className="text-sm font-semibold text-slate-400">Founder</p>
            <h3 className="mt-1 text-2xl font-black text-white">Varun Tripathi</h3>
            <p className="mt-2 text-sm text-electric">B.Tech CSE student • learner-builder • technology problem solver</p>
          </div>
        </div>
        <div>
          <SectionHeader
            kicker="Founder Profile"
            title="Built by a learner-builder focused on practical AI-tech execution."
            copy="Varun Tripathi is a B.Tech Computer Science and Engineering student and founder of VarunCodeX. He is focused on Salesforce development, AI-driven applications, web development, cloud technologies, automation, and startup building."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Salesforce development enthusiast",
              "AI-driven project builder",
              "Web and cloud learner",
              "Startup workflow thinker"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-4">
                <Sparkles size={18} className="text-electric" />
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
          <ButtonLink href={BRAND.linkedin} className="mt-8">
            <Linkedin size={18} className="mr-2" />
            Connect with Varun on LinkedIn
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import { BRAND } from "@/data/brand";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Professional services for websites, learning, automation, and growth."
        copy="Choose a practical starting point, then open a WhatsApp inquiry with the right context already prepared."
      >
        <a href={BRAND.whatsappServices} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-electric px-6 py-3 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow">
          Start a Project
        </a>
      </PageHero>
      <Services />
    </main>
  );
}

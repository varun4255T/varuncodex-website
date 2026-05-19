import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import { BRAND } from "@/data/brand";

export const metadata = {
  title: "Pricing"
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        kicker="Pricing"
        title="Clear starting points for focused technology services."
        copy="Pricing is structured for students, early founders, and small teams while keeping the brand professional and outcome-driven."
      >
        <a href={BRAND.whatsappServices} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-electric px-6 py-3 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow">
          Book Consultation
        </a>
      </PageHero>
      <Pricing />
    </main>
  );
}

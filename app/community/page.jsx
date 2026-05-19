import CommunityPageContent from "@/components/CommunityPageContent";
import PageHero from "@/components/PageHero";
import { WHATSAPP_COMMUNITY_LINK } from "@/data/brand";

export const metadata = {
  title: "Community"
};

export default function CommunityPage() {
  return (
    <main>
      <PageHero
        kicker="Community"
        title="Join the VarunCodeX Learning Community"
        copy="Stay updated with internships, jobs, AI tools, coding guidance, Salesforce insights, and startup learning."
      >
        <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-electric px-6 py-3 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow">
          Join WhatsApp Community
        </a>
      </PageHero>
      <CommunityPageContent />
    </main>
  );
}

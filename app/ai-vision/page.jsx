import AIVision from "@/components/AIVision";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "AI Vision"
};

export default function AIVisionPage() {
  return (
    <main>
      <PageHero
        kicker="AI Vision"
        title="AI as a practical layer for decisions, automation, and prototypes."
        copy="VarunCodeX focuses on useful AI patterns: scoring, recommendations, productivity workflows, agentic systems, and natural-language prototyping."
      />
      <AIVision />
    </main>
  );
}

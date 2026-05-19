import PageHero from "@/components/PageHero";
import Workflow from "@/components/Workflow";

export const metadata = {
  title: "Workflow"
};

export default function WorkflowPage() {
  return (
    <main>
      <PageHero
        kicker="Workflow"
        title="From raw idea to intelligent digital product."
        copy="A professional delivery flow for discovery, requirements, design, development, automation, AI intelligence, testing, deployment, and growth."
      />
      <Workflow />
    </main>
  );
}

import PageHero from "@/components/PageHero";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        kicker="Projects"
        title="Workflow-driven Salesforce project portfolio."
        copy="Enterprise-style project concepts for college submissions, internship shortlisting, technical interviews, and project competitions."
      />
      <Projects />
    </main>
  );
}

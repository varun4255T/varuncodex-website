import About from "@/components/About";
import Founder from "@/components/Founder";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="VarunCodeX is built for practical technology growth."
        copy="A founder-led brand helping students, startups, and businesses build useful products, learn modern skills, and automate workflows with realistic AI-tech execution."
      />
      <About />
      <Founder />
    </main>
  );
}

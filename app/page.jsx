import About from "@/components/About";
import AIVision from "@/components/AIVision";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Projects />
        <AIVision />
        <Workflow />
        <Community />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}

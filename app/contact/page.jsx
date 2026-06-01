import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Start a project, book a consultation, or ask for guidance."
        copy="Use WhatsApp for quick enquiry or submit the Salesforce CRM form for structured follow-up."
      />
      <Contact />
    </main>
  );
}
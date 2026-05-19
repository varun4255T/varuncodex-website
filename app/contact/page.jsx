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
        copy="Use the inquiry form to send your details directly through WhatsApp Business. No database is used for now."
      />
      <Contact />
    </main>
  );
}

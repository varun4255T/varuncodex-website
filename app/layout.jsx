import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://varuncodex.vercel.app"),
  title: {
    default: "VarunCodeX | AI, Salesforce, Web Development & Career Growth",
    template: "%s | VarunCodeX"
  },
  description:
    "VarunCodeX helps students, startups, and businesses build digital products, learn modern technologies, automate workflows, and grow through AI-powered systems.",
  keywords: [
    "VarunCodeX",
    "Varun Tripathi",
    "AI Automation",
    "Salesforce Development",
    "Web Development",
    "Coding Mentorship",
    "Startup Consulting",
    "Career Growth",
    "Internship Support"
  ],
  authors: [{ name: "Varun Tripathi" }],
  creator: "Varun Tripathi",
  openGraph: {
    title: "VarunCodeX | AI, Salesforce, Web Development & Career Growth",
    description:
      "Premium AI-tech brand for web development, Salesforce project thinking, coding education, startup consulting, and AI automation guidance.",
    url: "https://varuncodex.vercel.app",
    siteName: "VarunCodeX",
    images: [
      {
        url: "/assets/varuncodex-logo.png",
        width: 1200,
        height: 630,
        alt: "VarunCodeX logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VarunCodeX | AI, Salesforce, Web Development & Career Growth",
    description:
      "VarunCodeX helps students, startups, and businesses build digital products, learn modern technologies, automate workflows, and grow with AI-powered systems.",
    images: ["/assets/varuncodex-logo.png"]
  },
  icons: {
    icon: "/assets/varuncodex-logo.png",
    shortcut: "/assets/varuncodex-logo.png",
    apple: "/assets/varuncodex-logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

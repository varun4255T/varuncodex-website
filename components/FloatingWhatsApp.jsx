import { MessageCircle } from "lucide-react";
import { BRAND } from "@/data/brand";

export default function FloatingWhatsApp() {
  return (
    <a
      href={BRAND.whatsappServices}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VarunCodeX on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-electric/40 bg-electric text-midnight shadow-glow transition hover:-translate-y-1 hover:bg-cyanGlow"
    >
      <MessageCircle size={25} />
    </a>
  );
}

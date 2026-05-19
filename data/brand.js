export const BRAND = {
  name: "VarunCodeX",
  founder: "Varun Tripathi",
  tagline: "Build • Learn • Automate • Grow",
  phoneDisplay: "+91 8817505725",
  whatsappNumber: "918817505725",
  whatsappBase: "https://wa.me/918817505725",
  whatsappServices:
    "https://wa.me/918817505725?text=Hello%20VarunCodeX%2C%20I%20am%20interested%20in%20your%20services.",
  linkedin: "https://www.linkedin.com/in/varun-tripathi-439436218",
  linkedinDisplay: "www.linkedin.com/in/varun-tripathi-439436218",
  instagram: "https://www.instagram.com/VarunCodeX",
  instagramDisplay: "@VarunCodeX",
  logo: "/assets/varuncodex-logo.png"
};

export const WHATSAPP_COMMUNITY_LINK = "https://wa.me/918817505725";

export function whatsappMessageLink(message) {
  return `${BRAND.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const routes = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["AI Vision", "/ai-vision"],
  ["Workflow", "/workflow"],
  ["Pricing", "/pricing"],
  ["Community", "/community"],
  ["Contact", "/contact"]
];

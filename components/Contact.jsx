"use client";

import { useState } from "react";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { BRAND } from "@/data/brand";

const services = [
  "Web Development",
  "Startup Consulting",
  "Coding Mentorship",
  "AI Tools & Automation",
  "Salesforce & AWS",
  "Career Support",
  "Internship Program"
];

const budgets = [
  "Below ₹500",
  "₹500 - ₹1,500",
  "₹1,500 - ₹3,500",
  "₹3,500 - ₹6,000",
  "₹6,000 - ₹12,000",
  "Need guidance"
];

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      service: formData.get("service")?.toString().trim(),
      budget: formData.get("budget")?.toString().trim(),
      message: formData.get("message")?.toString().trim()
    };

    if (!values.name || !values.email || !values.phone || !values.service || !values.budget || !values.message) {
      setStatus("Please complete all required fields before opening WhatsApp.");
      return;
    }

    const message = `Hello VarunCodeX,

I want to inquire about your services.

Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Service Interested In: ${values.service}
Budget Range: ${values.budget}
Message: ${values.message}

Please contact me.`;

    setStatus("Your details will open in WhatsApp. Please press Send to submit your inquiry.");
    window.open(`${BRAND.whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[.86fr_1.14fr]">
        <div>
          <SectionHeader
            kicker="Contact"
            title="Let’s Build, Learn, Automate & Grow"
            copy="Share what you want to build, learn, automate, or improve. VarunCodeX can help you turn the next step into a practical plan."
          />
          <div className="mt-8 grid gap-4">
            <a href={BRAND.whatsappServices} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-electric/25 bg-electric/10 p-4 text-slate-100 transition hover:border-electric">
              <MessageCircle className="text-electric" />
              Chat on WhatsApp: {BRAND.phoneDisplay}
            </a>
            <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 break-all rounded-lg border border-white/10 bg-white/[0.07] p-4 text-slate-200 transition hover:border-electric/[0.45]">
              <Linkedin className="text-electric" />
              {BRAND.linkedinDisplay}
            </a>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-4 text-slate-200 transition hover:border-electric/[0.45]">
              <Instagram className="text-electric" />
              {BRAND.instagramDisplay}
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-4 text-slate-200">
              <Mail className="text-electric" />
              Email support coming soon
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Full Name
              <input name="name" required className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="Your full name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Email
              <input name="email" type="email" required className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Phone Number
              <input name="phone" required className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="+91" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Service Interested In
              <select name="service" required className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric" defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200 sm:col-span-2">
              Budget Range
              <select name="budget" required className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric" defaultValue="">
                <option value="" disabled>Select budget range</option>
                {budgets.map((budget) => <option key={budget}>{budget}</option>)}
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
            Message
            <textarea name="message" required className="min-h-36 rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric" placeholder="Tell me about your goal..." />
          </label>
          <button type="submit" className="mt-6 w-full rounded-full bg-electric px-6 py-4 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow">
            Open Inquiry in WhatsApp
          </button>
          {status ? <p className="mt-4 rounded-lg border border-electric/20 bg-electric/10 p-3 text-sm font-semibold text-cyanGlow">{status}</p> : null}
          <p className="mt-4 text-center text-sm text-slate-400">Email support coming soon.</p>
        </form>
      </div>
    </section>
  );
}

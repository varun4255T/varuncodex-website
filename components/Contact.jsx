"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { BRAND } from "@/data/brand";

const supportEmail = "codewithvarun1711@gmail.com";

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

const states = [
  ["", "Select state"],
  ["MP", "Madhya Pradesh"],
  ["MH", "Maharashtra"],
  ["DL", "Delhi"],
  ["UP", "Uttar Pradesh"],
  ["RJ", "Rajasthan"],
  ["GJ", "Gujarat"],
  ["KA", "Karnataka"],
  ["TN", "Tamil Nadu"],
  ["WB", "West Bengal"]
];

export default function Contact() {
  const [whatsappStatus, setWhatsappStatus] = useState("");
  const [leadStatus, setLeadStatus] = useState("");
  const descriptionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const response = document.getElementById("g-recaptcha-response");
      const captchaSettings = document.getElementsByName("captcha_settings")[0];

      if (!response || !captchaSettings) return;

      if (response.value.trim() === "") {
        try {
          const elems = JSON.parse(captchaSettings.value);
          elems.ts = JSON.stringify(new Date().getTime());
          captchaSettings.value = JSON.stringify(elems);
        } catch {
          // Keep Salesforce captcha script stable even if parsing fails.
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  function handleWhatsappSubmit(event) {
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

    if (
      !values.name ||
      !values.email ||
      !values.phone ||
      !values.service ||
      !values.budget ||
      !values.message
    ) {
      setWhatsappStatus("Please complete all required fields before opening WhatsApp.");
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

    setWhatsappStatus("Your details will open in WhatsApp. Please press Send to submit your inquiry.");

    window.open(
      `${BRAND.whatsappBase}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleSalesforceSubmit(event) {
    const form = event.currentTarget;
    const captchaResponse = document.getElementById("g-recaptcha-response");

    if (!captchaResponse || captchaResponse.value.trim() === "") {
      event.preventDefault();
      setLeadStatus("Please complete the reCAPTCHA before submitting.");
      return;
    }

    const formData = new FormData(form);

    const firstName = formData.get("first_name")?.toString().trim() || "";
    const lastName = formData.get("last_name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const company = formData.get("company")?.toString().trim() || "";
    const city = formData.get("city")?.toString().trim() || "";
    const service = formData.get("service_interest")?.toString().trim() || "";
    const budget = formData.get("budget_range")?.toString().trim() || "";
    const message = formData.get("customer_message")?.toString().trim() || "";

    if (descriptionRef.current) {
      descriptionRef.current.value = `New VarunCodeX Website Lead

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company / College: ${company}
City: ${city}
Service Interested In: ${service}
Budget Range: ${budget}

Message:
${message}`;
    }

    setLeadStatus("Submitting your enquiry to Salesforce CRM...");
  }

  return (
    <section id="contact" className="py-24">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        async
        defer
      />

      <div className="section-shell grid gap-10 lg:grid-cols-[.86fr_1.14fr]">
        <div>
          <SectionHeader
            kicker="Contact"
            title="Let’s Build, Learn, Automate & Grow"
            copy="Use WhatsApp for quick enquiry or submit your details through the Salesforce CRM form for structured follow-up."
          />

          <div className="mt-8 grid gap-4">
            <a
              href={BRAND.whatsappServices}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-electric/25 bg-electric/10 p-4 text-slate-100 transition hover:border-electric"
            >
              <MessageCircle className="text-electric" />
              Chat on WhatsApp: {BRAND.phoneDisplay}
            </a>

            <a
              href={`mailto:${supportEmail}`}
              className="flex items-center gap-3 break-all rounded-lg border border-electric/25 bg-electric/10 p-4 text-slate-100 transition hover:border-electric"
            >
              <Mail className="text-electric" />
              {supportEmail}
            </a>

            <a
              href={BRAND.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 break-all rounded-lg border border-white/10 bg-white/[0.07] p-4 text-slate-200 transition hover:border-electric/[0.45]"
            >
              <Linkedin className="text-electric" />
              {BRAND.linkedinDisplay}
            </a>

            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-4 text-slate-200 transition hover:border-electric/[0.45]"
            >
              <Instagram className="text-electric" />
              {BRAND.instagramDisplay}
            </a>
          </div>
        </div>

        <form onSubmit={handleWhatsappSubmit} className="glass-panel rounded-lg p-6">
          <div className="mb-5">
            <span className="section-kicker">Quick WhatsApp Enquiry</span>
            <h3 className="mt-3 text-2xl font-black text-white">
              Open inquiry directly in WhatsApp
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              This keeps your existing WhatsApp enquiry flow unchanged.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Full Name
              <input
                name="name"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="Your full name"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Phone Number
              <input
                name="phone"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="+91"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Service Interested In
              <select
                name="service"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric"
                defaultValue=""
              >
                <option value="" disabled className="bg-slate-950 text-white">
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} className="bg-slate-950 text-white">
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200 sm:col-span-2">
              Budget Range
              <select
                name="budget"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric"
                defaultValue=""
              >
                <option value="" disabled className="bg-slate-950 text-white">
                  Select budget range
                </option>
                {budgets.map((budget) => (
                  <option key={budget} className="bg-slate-950 text-white">
                    {budget}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
            Message
            <textarea
              name="message"
              required
              className="min-h-36 rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
              placeholder="Tell me about your goal..."
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-electric px-6 py-4 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow"
          >
            Open Inquiry in WhatsApp
          </button>

          {whatsappStatus ? (
            <p className="mt-4 rounded-lg border border-electric/20 bg-electric/10 p-3 text-sm font-semibold text-cyanGlow">
              {whatsappStatus}
            </p>
          ) : null}

          <p className="mt-4 text-center text-sm text-slate-400">
            WhatsApp enquiry opens instantly in a new tab.
          </p>
        </form>

        <form
          onSubmit={handleSalesforceSubmit}
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DdM00000vPypt"
          method="POST"
          className="glass-panel rounded-lg p-6 lg:col-span-2"
        >
          <input
            type="hidden"
            name="captcha_settings"
            value='{"keyname":"varuncodex22","fallback":"true","orgId":"00DdM00000vPypt","ts":""}'
          />
          <input type="hidden" name="oid" value="00DdM00000vPypt" />
          <input type="hidden" name="retURL" value="https://varuncodex.netlify.app/" />
          <input type="hidden" name="lead_source" value="Website" />
          <input ref={descriptionRef} type="hidden" name="description" />

          <div className="mb-6 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="section-kicker">Salesforce CRM Enquiry</span>
              <h3 className="mt-3 text-3xl font-black text-white">
                Submit your details for email follow-up
              </h3>
            </div>

            <p className="text-sm leading-6 text-slate-400 lg:pt-10">
              This form sends the enquiry to Salesforce Web-to-Lead. WhatsApp remains available for fast contact, while this CRM form helps track leads professionally.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              First Name
              <input
                id="first_name"
                name="first_name"
                maxLength="40"
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="Enter first name"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Last Name *
              <input
                id="last_name"
                name="last_name"
                maxLength="80"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="Enter last name"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Email *
              <input
                id="email"
                name="email"
                type="email"
                maxLength="80"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Phone Number
              <input
                id="phone"
                name="phone"
                maxLength="40"
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="+91"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Company / College *
              <input
                id="company"
                name="company"
                maxLength="40"
                required
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="Enter company or college"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              City
              <input
                id="city"
                name="city"
                maxLength="40"
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
                placeholder="Enter city"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Country
              <select
                id="country_code"
                name="country_code"
                defaultValue="IN"
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric"
              >
                <option value="" className="bg-slate-950 text-white">
                  Select country
                </option>
                <option value="IN" className="bg-slate-950 text-white">
                  India
                </option>
                <option value="US" className="bg-slate-950 text-white">
                  United States
                </option>
                <option value="GB" className="bg-slate-950 text-white">
                  United Kingdom
                </option>
                <option value="CA" className="bg-slate-950 text-white">
                  Canada
                </option>
                <option value="AU" className="bg-slate-950 text-white">
                  Australia
                </option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              State / Province
              <select
                id="state_code"
                name="state_code"
                defaultValue=""
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric"
              >
                {states.map(([value, label]) => (
                  <option key={value || label} value={value} className="bg-slate-950 text-white">
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Service Interested In *
              <select
                name="service_interest"
                required
                defaultValue=""
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric"
              >
                <option value="" disabled className="bg-slate-950 text-white">
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-slate-950 text-white">
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Budget Range *
              <select
                name="budget_range"
                required
                defaultValue=""
                className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-electric"
              >
                <option value="" disabled className="bg-slate-950 text-white">
                  Select budget range
                </option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget} className="bg-slate-950 text-white">
                    {budget}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
            Message *
            <textarea
              name="customer_message"
              required
              className="min-h-32 rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric"
              placeholder="Tell us what you want to build, learn, automate, or improve..."
            />
          </label>

          <div className="mt-6 flex justify-center rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div className="origin-center scale-[0.88] sm:scale-100">
              <div
                className="g-recaptcha"
                data-sitekey="6Lf-iAgtAAAAADG5XY6uOB4XOSnfuqR1JIhzq2XH"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-electric px-6 py-4 text-sm font-black text-midnight shadow-glow transition hover:bg-cyanGlow"
          >
            Submit to Salesforce CRM
          </button>

          {leadStatus ? (
            <p className="mt-4 rounded-lg border border-electric/20 bg-electric/10 p-3 text-sm font-semibold text-cyanGlow">
              {leadStatus}
            </p>
          ) : null}

          <p className="mt-4 text-center text-sm text-slate-400">
            You can also email directly at{" "}
            <a href={`mailto:${supportEmail}`} className="font-bold text-electric hover:text-cyanGlow">
              {supportEmail}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
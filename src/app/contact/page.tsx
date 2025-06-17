// 'use client';

import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import BackButton from "@/components/custom/back-comp";

// SEO Metadata
export const metadata: Metadata = {
  title: "Contact Us – Scanzy AI Support, Help & Inquiries",
  description:
    "Reach out to Scanzy AI for support, questions, business inquiries, feedback, partnerships, or feature requests. We're here to help you make the most of our AI tools.",
  keywords: [
    "Contact Scanzy AI",
    "Scanzy AI support",
    "plagiarism scanner help",
    "AI content detector contact",
    "AI detection support",
    "report AI issues",
    "contact AI content checker",
    "Scanzy customer service",
    "ask Scanzy AI",
    "Scanzy contact email",
    "submit message to Scanzy",
    "report problem Scanzy",
    "feature request Scanzy",
    "feedback Scanzy AI",
    "talk to Scanzy AI team",
    "contact us Scanzy",
    "Scanzy help center",
    "chat with Scanzy AI",
    "Scanzy support request",
    "reach Scanzy developers",
    "Scanzy email",
    "Scanzy phone number",
    "get in touch with Scanzy",
    "contact us for AI detection",
    "AI tool support Scanzy",
    "Scanzy issue reporting",
    "Scanzy website contact",
    "AI content rewriting contact",
    "Scanzy grammar fix feedback",
    "Scanzy rewrite tool support",
    "Scanzy AI insights contact",
    "Bug report Scanzy tool",
    "User feedback Scanzy",
    "Scanzy help and assistance",
    "Scanzy chatbot inquiry",
    "contact for educational AI tools",
    "AI-powered scanner support",
    "Scanzy questions",
    "customer queries Scanzy",
    "Scanzy business inquiry",
    "Scanzy tool suggestions",
    "Scanzy user issue report",
    "Scanzy contact details",
    "Scanzy response time",
    "AI content support",
    "scanzy.fun contact",
    "Reach Scanzy AI engineers",
    "Scanzy contact method",
    "customer support Scanzy AI",
    "Contact for plagiarism questions",
    "Contact for originality scanner",
    "Send message to Scanzy team",
    "Submit form Scanzy",
    "Scanzy technical issue",
    "Talk with Scanzy",
    "Scanzy founder contact",
    "Partnership with Scanzy",
    "Scanzy affiliate inquiry",
    "AI tool feedback form",
    "Bug fix contact Scanzy",
    "Scanzy update request",
    "Scanzy help line",
    "Scanzy contact portal",
    "Contact AI checker",
    "Scanzy marketing inquiry",
    "Scanzy content query",
    "Scanzy form submission",
    "Contact GPT checker team",
    "AI plagiarism support Scanzy",
    "Scanzy email support",
    "Scanzy review submission",
    "Scanzy complaint form",
    "AI tool improvement request",
    "Report user experience",
    "Send question to Scanzy AI",
    "Scanzy head office",
    "AI scanner developers",
    "Scanzy feedback and help",
    "User complaint Scanzy",
    "Ask about AI detection",
    "Scanzy blog query",
    "Submit ticket Scanzy",
    "Contact scanzy.fun team",
    "Contact backend Scanzy",
    "Talk with AI experts",
    "Chat with Scanzy admin",
    "Scanzy user interface feedback",
    "AI rewrite help contact",
    "contact page Scanzy AI",
    "form support Scanzy",
    "Contact via form Scanzy AI",
    "bug report form Scanzy",
    "AI originality scan contact",
    // ... add more SEO keywords up to 400
  ],
  openGraph: {
    title: "Contact Scanzy AI – Help & Support Portal",
    description:
      "Need help with AI content tools, plagiarism detection, or original writing? Contact the Scanzy AI team for fast support and expert help.",
    url: "https://scanzy.fun/contact",
    siteName: "Scanzy AI",
    type: "website",
    images: [
      {
        url: "https://scanzy.fun/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scanzy Contact Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Scanzy AI Tools Help Center",
    description:
      "Reach Scanzy AI for inquiries, issues, feedback, suggestions, and everything related to AI-powered content tools.",
    images: ["https://scanzy.fun/og-image.png"],
  },
  alternates: {
    canonical: "https://scanzy.fun/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="mb-32 text-gray-400">
      <BackButton  />

      {/* Google Maps Embed */}
      <div className="relative h-[300px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.981479714636!2d72.1106548743707!3d34.197949610024864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dec85c6bb887a3%3A0x68507af7f7b98688!2sMohib%20Banda%20First%20Bus%20Stop!5e0!3m2!1sen!2s!4v1749899620448!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Contact Form and Info */}
      <div className="container px-6 md:px-12 -mt-[100px]">
        <div className="rounded-lg px-6 py-12 shadow-xl backdrop-blur-md border border-border md:py-16 md:px-12 bg-background text-foreground">
          <div className="flex flex-wrap gap-8">
            {/* Form Section */}
            <div className="w-full lg:w-5/12">
              <form className="space-y-6">
                <div>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <Textarea id="message" rows={4} placeholder="Write your message..." />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="copy" defaultChecked />
                  <Label htmlFor="copy">Send me a copy of this message</Label>
                </div>
                <Button type="submit" className="w-full">
                  Send
                </Button>
              </form>
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-6/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Phone", value: "+1 234 567 890" },
                  { label: "Email", value: "support@example.com" },
                  { label: "Location", value: "San Francisco, CA" },
                  { label: "Hours", value: "Mon-Fri: 9am - 6pm" },
                ].map((info, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-md dark:text-gray-400 border border-border"
                  >
                    <p className="font-semibold text-sm">{info.label}</p>
                    <p>{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

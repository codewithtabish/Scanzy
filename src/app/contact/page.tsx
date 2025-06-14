'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import BackButton from "@/components/custom/back-comp";

export default function ContactPage() {
  return (
    <section className="mb-32 text-gray-400">
        <BackButton bg=""/>
      {/* Google Maps Embed */}
      <div className="relative h-[300px] overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.981479714636!2d72.1106548743707!3d34.197949610024864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dec85c6bb887a3%3A0x68507af7f7b98688!2sMohib%20Banda%20First%20Bus%20Stop!5e0!3m2!1sen!2s!4v1749899620448!5m2!1sen!2s" width="600" height="450" style={{border:0}}  loading="lazy" 
      className="w-full h-full "
    //   clasreferrerpolicy="no-referrer-when-downgrade"
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
                  {/* <Label htmlFor="name">Name</Label> */}
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  {/* <Label htmlFor="email">Email</Label> */}
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  {/* <Label htmlFor="message">Message</Label> */}
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
                  <div key={index} className="p-4 rounded-md dark:text-gray-400 border border-border">
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

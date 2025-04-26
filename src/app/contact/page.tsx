import React from 'react';
import { Footer } from '@/components/ui/footer';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { HeroHeader } from "@/components/hero5-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div>
      <HeroHeader />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 mt-24">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions or want to learn more? Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-gray-600">support@outreachsheet.com</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-gray-600">The Offices 4, One Central,<br />Dubai, United Arab Emirates</p>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/outreachsheetglobal?igsh=MTg4ZHdxa3hnYmI2YQ==" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your needs..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer 
        brandName="OutreachSheet"
        socialLinks={[
          {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://linkedin.com",
            label: "LinkedIn"
          },
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://www.instagram.com/outreachsheetglobal?igsh=MTg4ZHdxa3hnYmI2YQ==",
            label: "Instagram"
          },
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter"
          },
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" }
        ]}
        legalLinks={[
          { href: "/privacy-policy", label: "Privacy Policy" },
          { href: "/terms-of-service", label: "Terms of Service" }
        ]}
      />
    </div>
  );
}

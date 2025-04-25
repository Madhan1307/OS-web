import HeroSection from "@/components/hero-section";
import Features1 from "@/components/features-1";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import { Footer } from "@/components/ui/footer";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <Features1 />
      <Pricing />
      <Footer 
        logo={<Image src="/logo.svg" alt="Logo" width={32} height={32} />}
        brandName="Your Brand"
        socialLinks={[
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub"
          },
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter"
          },
          {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://linkedin.com",
            label: "LinkedIn"
          }
        ]}
        mainLinks={[
          { href: "/about", label: "About" },
          { href: "/features", label: "Features" },
          { href: "/pricing", label: "Pricing" },
          { href: "/contact", label: "Contact" }
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/terms", label: "Terms of Service" }
        ]}
        copyright={{
          text: "© 2025 Your Brand. All rights reserved.",
          license: "Licensed under MIT."
        }}
      />

    </>
  );
}

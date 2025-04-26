import HeroSection from "@/components/hero-section";
import Features1 from "@/components/features-1";
import Products from "@/components/products";
import Pricing from "@/components/pricing";
import { Footer } from "@/components/ui/footer";
import { Twitter, Linkedin , Instagram } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Products />
      <Features1 />
      <Pricing />
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
          }
        ]}
        mainLinks={[
          { href: "#products", label: "Products" },
          { href: "#features", label: "Features" },
          { href: "#pricing", label: "Pricing" },
          { href: "/contact", label: "Contact-Us" }
        ]}
        legalLinks={[
          { href: "/privacy-policy", label: "Privacy Policy" },
          { href: "/terms-of-service", label: "Terms of Service" }
        ]}
      />

    </>
  );
}

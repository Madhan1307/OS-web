import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "../logo";

interface FooterProps {
  brandName: "OutreachSheet";
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
}

export function Footer({
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
}: FooterProps) {
  return (
    <footer
      className="pb-6 pt-16 lg:pb-8 lg:pt-24 w-full min-w-full"
      style={{ backgroundColor: "#F8F9F8" }}
    >
      <div className="px-4 lg:px-8">
        <div className="flex flex-col">
          <Link
            href="/"
            className="flex items-center gap-x-2"
            aria-label={brandName}
          >
            <Logo />
          </Link>
          <h1 className="text-xl lg:text-2xl font-bold mt-10 lg:mt-14 mb-4 lg:mb-6">
            Let&apos;s Connect and Collaborate!
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8">
            <p className="w-full lg:w-1/3 text-sm lg:text-base">
              We&apos;re excite to hear about your vision and explore how we can
              bring it to life together
            </p>
            <nav className="w-full lg:w-auto">
              <ul className="list-none flex flex-wrap gap-4">
                {mainLinks.map((link, i) => (
                  <li key={i} className="shrink-0">
                    <Link
                      href={link.href}
                      className="text-sm text-primary underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t mt-6 pt-6 md:mt-8 md:pt-8 flex flex-col lg:grid lg:grid-cols-10 gap-6 lg:gap-0">
          <div className="order-2 lg:order-1 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap gap-4 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="shrink-0 ">
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 text-sm leading-6 text-muted-foreground lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <ul className="flex list-none space-x-3">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    asChild
                  >
                    <a
                      style={{ backgroundColor: "#0F9D58", color: "white" }}
                      href={link.href}
                      target="_blank"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

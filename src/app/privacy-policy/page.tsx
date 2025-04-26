import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { HeroHeader } from "@/components/hero5-header";
import { Footer } from '@/components/ui/footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12 mt-24">
          <h2 className="text-gray-600 mb-4 inline-block px-6 py-2 bg-gray-50 rounded-full">Privacy Policy</h2>
          <h1 className="text-4xl font-bold mb-6">Our commitment to protecting your privacy</h1>
          <p className="text-gray-500 hover:underline cursor-pointer">
            Learn how we collect and use your data to provide our services.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-4">Updated April 26, 2025</p>
        </div>

        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to Outreachsheet&apos;s Privacy Policy. Your privacy is of utmost importance to us, and we are wholly committed to safeguarding your personal information. This comprehensive Privacy Policy provides a detailed account of how we collect, utilize, and protect your data when you engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>
              By accessing or utilizing our services, you willingly and legally bind yourself to these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Description of Services</h3>
                <p>
                  Our suite of offerings comprises AI-powered outreach services crafted to empower your professional pursuits. We&apos;re dedicated to assisting you in achieving your goals effectively and efficiently.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Service Modifications</h3>
                <p>
                  Kindly take note that we retain the prerogative to alter or cease our services without prior notification, exercising this right at our discretion and as the need arises.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Accounts and Responsibilities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Account Creation</h3>
                <p>
                  In order to establish and maintain an account with us, users must meet specific prerequisites stipulated by OutreachSheet.
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">User Responsibilities</h3>
                <p>
                  The responsibility rests upon users to diligently safeguard their account information and bear responsibility for all activities conducted under their account.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Usage and Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Data Collection</h3>
                <p>
                  The data we collect from users is instrumental in enhancing our services and is employed in strict accordance with the provisions detailed in our Privacy Policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Privacy Policy Reference</h3>
                <p>
                  For a comprehensive understanding of the processes surrounding data collection, usage, and protection, we refer you to our Privacy Policy, wherein we furnish intricate particulars on these matters.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Content and Conduct</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">User Content</h3>
                <p>
                  Users are expected to comply with the guidelines governing the content they upload or generate within our platform, fostering an environment of respect and integrity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Prohibited Conduct</h3>
                <p>
                  We categorically prohibit users from generating or uploading content that is unlawful, offensive, or infringing upon intellectual property rights, and we reserve the right to enforce this prohibition rigorously.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Governing Law</h3>
                <p>
                  All disputes are subject to resolution in accordance with the laws of the United Arab Emirates.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Arbitration Agreement</h3>
                <p>
                  We stipulate that disputes shall be resolved exclusively through binding arbitration, adhering to the rules of UAE law, rather than resorting to litigation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">General Provisions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Entire Agreement</h3>
                <p>
                  These Terms constitute the entire agreement between you and OutreachSheet, encapsulating our mutual rights and obligations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Severability</h3>
                <p>
                  In the event that any provision within these Terms is deemed invalid, the remainder shall remain in full force and effect, safeguarding the integrity of our agreement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:info@outreachsheet.com" className="text-blue-600 hover:underline">info@outreachsheet.com</a>.
            </p>
          </section>
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
      
          { href: "/contact", label: "Contact Us" }
        ]}
        legalLinks={[
          { href: "/privacy-policy", label: "Privacy Policy" },
          { href: "/terms-of-service", label: "Terms of Service" }
        ]}
      />
    </main>
  );
}

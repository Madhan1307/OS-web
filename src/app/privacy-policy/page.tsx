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
          <p className="text-gray-600 mb-4">Updated May 1, 2025</p>
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

          <section>
            <h2 className="text-2xl font-semibold mb-4">Google User Data Handling</h2>
            <div className="space-y-8">
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">1. Google User Data Collection</h3>
                <p className="mb-4">Our Google Sheets Add-on specifically accesses and processes the following Google user data:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Google Sheets data and content - to provide spreadsheet functionality</li>
                  <li>Google Drive scope - to access and modify your spreadsheets</li>
                  <li>User profile information - to identify the current user</li>
                  <li>Add-on preferences and settings - stored in Chrome storage</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">2. Use of Google User Data</h3>
                <p className="mb-4">We use the collected Google user data strictly for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To provide core spreadsheet manipulation functionality within Google Sheets</li>
                  <li>To save and retrieve user preferences and settings</li>
                  <li>To authenticate users and maintain user sessions</li>
                  <li>To process spreadsheet data according to user requests</li>
                  <li>To improve the add-on&apos;s functionality and user experience</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">3. Data Sharing and Transfer</h3>
                <p className="mb-4">We maintain strict control over Google user data and:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Do not sell or rent Google user data to any third parties</li>
                  <li>Do not share Google user data with any external services or analytics providers</li>
                  <li>Only process data within the user&apos;s browser environment</li>
                  <li>May only disclose data if required by law, with user consent, or to protect our rights</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">4. Data Protection Mechanisms</h3>
                <p className="mb-4">We implement comprehensive security measures to protect Google user data:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>End-to-end encryption for all data transmissions</li>
                  <li>Secure local storage using Chrome&apos;s built-in storage APIs</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>No external server storage - all processing happens locally</li>
                  <li>Compliance with Google&apos;s security requirements for Add-ons</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">5. Data Retention and Deletion</h3>
                <p className="mb-4">Our data retention and deletion policies for Google user data:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>User data is only stored locally during active use of the add-on</li>
                  <li>All Google user data is automatically deleted when the add-on is uninstalled</li>
                  <li>Users can manually clear their data through the add-on settings at any time</li>
                  <li>No persistent storage of spreadsheet data - only processed during active operations</li>
                  <li>User preferences are retained only while the add-on is installed</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">6. User Rights</h3>
                <p className="mb-4">As a user of our add-on, you have the following rights regarding your Google user data:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Right to access your data through the add-on settings</li>
                  <li>Right to delete your data at any time</li>
                  <li>Right to restrict or opt-out of data collection</li>
                  <li>Right to uninstall the add-on, which removes all associated data</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">7. Contact Information</h3>
                <p className="mb-4">For any questions or concerns about this Privacy Policy or our handling of Google user data, please contact us at:</p>
                <p className="mb-4">Email: <a href="mailto:info@outreachsheet.com" className="text-blue-600 hover:underline">info@outreachsheet.com</a></p>
              </div>
            </div>
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

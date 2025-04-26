import React from 'react';
import { Footer } from '@/components/ui/footer';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { HeroHeader } from "@/components/hero5-header";

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12 mt-24">
          <h2 className="text-gray-600 mb-4 inline-block px-6 py-2 bg-gray-50 rounded-full">Terms And Conditions</h2>
          <h1 className="text-4xl font-bold mb-6">Our Terms And Conditions</h1>
          <p className="text-gray-500 hover:underline cursor-pointer">
            Read our Terms below to learn more about your rights and responsibilities as a user.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-4">Updated April 26, 2025</p>
        </div>
      
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to OutreachSheet. We specialize in AI-powered hyper-personalized outreach to help businesses grow. This policy describes how we collect, use, and handle your information in compliance with the laws and regulations applicable in the United Arab Emirates (UAE).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">User-Provided Data</h3>
                <p>
                  This includes personal information you provide when signing up, such as name, email address, and company details. We are committed to protecting and respecting your privacy in accordance with UAE data protection laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Automatically Collected Data</h3>
                <p>
                  We collect data related to your interaction with our services, like IP addresses and browser types, ensuring that your information is handled securely and in line with UAE regulations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">AI-Driven Data Analysis</h3>
                <p>
                  Our AI algorithms analyze business profiles and market trends to tailor our services to your specific needs, all while adhering to UAE data privacy standards.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h4 className="text-lg font-medium mb-2">Example</h4>
                <p className="italic">
                  John, a marketer, signs up and inputs his professional details. Our AI analyzes these details to customize outreach strategies for John.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Use</h2>
            <p className="mb-4">We use the data collected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve our services and personalize the user experience, ensuring they align with UAE market demands.</li>
              <li>Communicate updates and offers in compliance with UAE regulations.</li>
              <li>Conduct market research and analysis, always respecting your privacy rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p>
              We do not sell personal data. Your information may be shared with third-party service providers for operational purposes, under strict confidentiality agreements, and in accordance with UAE data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We employ industry-standard measures to protect your data from unauthorized access, prioritizing your data security in accordance with UAE standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
            <p className="mb-4">As a user, you have specific rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your personal data in accordance with UAE regulations.</li>
              <li>The right to request correction or deletion of your data, respecting UAE data privacy standards.</li>
              <li>The ability to withdraw consent for data use, aligning with UAE laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Privacy Policy</h2>
            <p>
              We may update this policy in accordance with UAE regulations. Changes will be communicated through our website and email notifications, ensuring transparency and compliance with UAE data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              For questions about this policy or any privacy-related concerns, please do not hesitate to contact our dedicated privacy team at <a href="mailto:privacy@outreachsheet.com" className="text-blue-600 hover:underline">privacy@outreachsheet.com</a>. We are here to assist you in accordance with UAE data privacy regulations.
            </p>
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
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Ownership of Services</h3>
                <p>
                  It is important to note that OutreachSheet exclusively retains all rights to its services, safeguarding our commitment to innovation and excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">User License</h3>
                <p>
                  In recognition of your patronage, we extend to you a limited, non-exclusive, and non-transferable license permitting the use of our services within the parameters outlined in these Terms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Payment and Billing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Fees and Charges</h3>
                <p>
                  Comprehensive details regarding service fees, including any recurring charges, are readily available for your perusal on our official website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Billing Policies</h3>
                <p>
                  Our billing process is structured on a monthly basis, and we wish to inform our users that the fees levied for our services are non-refundable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination of Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">User Termination</h3>
                <p>
                  We afford users the facility to initiate the termination of their accounts, and we have elucidated the procedure for doing so on our website for your convenience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">OutreachSheet&apos;s Right to Terminate</h3>
                <p>
                  In adherence to these terms, we retain the authority to unilaterally terminate or suspend your access to our services in the event of any violations thereof.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">No Warranties</h3>
                <p>
                  We extend our services &quot;as is&quot; without any warranties, emphasizing the importance of managing your expectations accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Service Availability</h3>
                <p>
                  While we diligently endeavor to ensure the seamless functionality of our service, we do not offer any guarantees regarding uninterrupted service or the absence of errors.
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
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" }
        ]}
        legalLinks={[
          { href: "/privacy-policy", label: "Privacy Policy" },
          { href: "/terms-of-service", label: "Terms of Service" }
        ]}
      />
    </main>
  );
}

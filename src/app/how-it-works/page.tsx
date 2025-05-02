"use client";

import React, { useState, useEffect } from "react";
import { HeroHeader } from "@/components/hero5-header";
import { Footer } from "@/components/ui/footer";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const Page: React.FC = () => {
  const [loading, setLoading] = useState({
    start: true,
    multiple: true,
    people: true,
    single: true,
  });
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "start-outreachsheet",
        "fetch-multiple-profiles",
        "fetch-people-linkedin",
        "fetch-single-linkedin-profile",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <HeroHeader />
        <div className="flex flex-col">
          <div className="flex pt-24 md:pt-36">
            <div className="w-[25%] bg-gray-100 p-8 sticky top-28 h-[calc(100vh-64px)]">
              <h3 className="text-lg font-semibold mb-4">Related articles</h3>
              <nav className="space-y-2">
                <a
                  href="#start-outreachsheet"
                  className={`block px-3 py-2 rounded-lg transition-all ${
                    activeSection === "start-outreachsheet"
                      ? "text-[#0F9D58] font-medium bg-[#0F9D58]/10"
                      : "text-gray-700 hover:text-[#0F9D58] hover:bg-[#0F9D58]/5"
                  }`}
                >
                  How can I start with OutreachSheet?
                </a>
                <a
                  href="#fetch-multiple-profiles"
                  className={`block px-3 py-2 rounded-lg transition-all ${
                    activeSection === "fetch-multiple-profiles"
                      ? "text-[#0F9D58] font-medium bg-[#0F9D58]/10"
                      : "text-gray-700 hover:text-[#0F9D58] hover:bg-[#0F9D58]/5"
                  }`}
                >
                  How can I fetch multiple profiles from Sales Navigator search
                  in bulk?
                </a>
                <a
                  href="#fetch-people-linkedin"
                  className={`block px-3 py-2 rounded-lg transition-all ${
                    activeSection === "fetch-people-linkedin"
                      ? "text-[#0F9D58] font-medium bg-[#0F9D58]/10"
                      : "text-gray-700 hover:text-[#0F9D58] hover:bg-[#0F9D58]/5"
                  }`}
                >
                  How can I fetch people from LinkedIn?
                </a>
                <a
                  href="#fetch-single-linkedin-profile"
                  className={`block px-3 py-2 rounded-lg transition-all ${
                    activeSection === "fetch-single-linkedin-profile"
                      ? "text-[#0F9D58] font-medium bg-[#0F9D58]/10"
                      : "text-gray-700 hover:text-[#0F9D58] hover:bg-[#0F9D58]/5"
                  }`}
                >
                  How can I fetch a single LinkedIn profile?
                </a>
              </nav>
            </div>
            <div className="w-[75%] bg-white ">
              <div className="p-6 flex flex-col gap-4">
                <div id="start-outreachsheet">
                  <h1 className="text-3xl font-bold mb-4 py-4">
                    How I start with OutreachSheet?
                  </h1>
                  {loading.start && (
                    <div className="flex justify-center items-center h-[600px] bg-gray-50">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                    </div>
                  )}
                  <iframe
                    src="https://scribehow.com/embed/How_to_Download_OutreachSheet_Extension__7Jz6DQkDRgaS_UdwD1nIhA?as=scrollable"
                    width="100%"
                    height="600px"
                    allowFullScreen
                    style={{
                      border: 0,
                      display: loading.start ? "none" : "block",
                    }}
                    onLoad={() =>
                      setLoading((prev) => ({ ...prev, start: false }))
                    }
                  />
                </div>
                <div id="fetch-multiple-profiles">
                  <h1 className="text-3xl font-bold mb-4 py-4">
                    How can I fetch multiple profiles from Sales Navigator
                    search in bulk?
                  </h1>
                  {loading.multiple && (
                    <div className="flex justify-center items-center h-[600px] bg-gray-50">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                    </div>
                  )}
                  <iframe
                    src="https://scribehow.com/embed/How_can_I_fetch_multiple_profiles_from_Sales_Navigator_search_in_bulk__bJGyYAPaRdWfvS90HfraZQ?as=scrollable"
                    width="100%"
                    height="600px"
                    allowFullScreen
                    style={{
                      border: 0,
                      display: loading.multiple ? "none" : "block",
                    }}
                    onLoad={() =>
                      setLoading((prev) => ({ ...prev, multiple: false }))
                    }
                  />
                </div>
                <div id="fetch-people-linkedin">
                  <h1 className="text-3xl font-bold mb-4 py-4">
                    How can I fetch people from LinkedIn?
                  </h1>
                  {loading.people && (
                    <div className="flex justify-center items-center h-[600px] bg-gray-50">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                    </div>
                  )}
                  <iframe
                    src="https://scribehow.com/embed/How_can_I_fetch_people_from_Linkedin__oR-_vQ-lRsG2g3zlk5rHig?as=scrollable"
                    width="100%"
                    height="600px"
                    allowFullScreen
                    style={{
                      border: 0,
                      display: loading.people ? "none" : "block",
                    }}
                    onLoad={() =>
                      setLoading((prev) => ({ ...prev, people: false }))
                    }
                  />
                </div>
                <div id="fetch-single-linkedin-profile">
                  <h1 className="text-3xl font-bold mb-4 py-4">
                    How can I fetch a single LinkedIn profile?
                  </h1>
                  {loading.single && (
                    <div className="flex justify-center items-center h-[600px] bg-gray-50">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                    </div>
                  )}
                  <iframe
                    src="https://scribehow.com/embed/How_can_I_fetch_a_single_LinkedIn_profile___qkekGXESfGS5s3D5jDvsg?as=scrollable"
                    width="100%"
                    height="600px"
                    allowFullScreen
                    style={{
                      border: 0,
                      display: loading.single ? "none" : "block",
                    }}
                    onLoad={() =>
                      setLoading((prev) => ({ ...prev, single: false }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer
            brandName="OutreachSheet"
            socialLinks={[
              {
                icon: <Linkedin className="h-5 w-5" />,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: <Instagram className="h-5 w-5" />,
                href: "https://www.instagram.com/outreachsheetglobal?igsh=MTg4ZHdxa3hnYmI2YQ==",
                label: "Instagram",
              },
              {
                icon: <Twitter className="h-5 w-5" />,
                href: "https://twitter.com",
                label: "Twitter",
              },
            ]}
            mainLinks={[
              { href: "/contact", label: "Contact-Us" },
            ]}
            legalLinks={[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Page;

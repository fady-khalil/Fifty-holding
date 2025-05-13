import React, { useState, useEffect, useRef } from "react";
import Container from "Components/Container/Container";
import logo from "assets/50-l.jpg";
import { Link, useLocation } from "react-router-dom";

import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { List, X } from "@phosphor-icons/react";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [mobileMenuVisible, setMobileMenuVisble] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [selectedSection, setSelectedSection] = useState(null); // New state to track the active section

  // Reference to the header element
  const headerRef = useRef(null);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    setSelectedSection(sectionId); // Set the active section
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    // Set the initial header height
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);

      // Reset selectedSection when header is at the top
      if (scrollTop === 0) {
        setSelectedSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Update header height if the window resizes
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollTop]);

  const toggleMobileView = () => {
    setMobileMenuVisble((cur) => !cur);
  };

  const isAboutUsPage = location.pathname === "/about-us";
  const isWhoWeDoPage = location.pathname === "/who-we-do";
  const isBusinessSectorsPage = location.pathname === "/business-sectors";
  const isPartnersPage = location.pathname === "/partners";
  const isClientsPage = location.pathname === "/clients";
  const isContactUsPage = location.pathname === "/contact-us";

  return (
    <header
      ref={headerRef}
      className={`transition ease-in duration-300 ${
        isSticky ? "sticky top-0 z-[1000] bg-white border-b border-primary" : ""
      } ${
        (isAboutUsPage || isWhoWeDoPage || isBusinessSectorsPage) && !isSticky
          ? "absolute top-0 left-0 w-full z-[1000]"
          : ""
      }`}
    >
      <Container className={`${isSticky ? "" : "relative"}`}>
        <div
          className={`absolute transition ease-in duration-300 rounded-md p-1 hidden xl:block border border-primary ${
            isSticky ? "top-1/2 -translate-y-1/2 right-4" : "top-0 right-0"
          }`}
        >
          <LanguageSwitcher />
        </div>
        <div className="flex justify-between uppercase text-primary mb-4">
          <nav
            className={`hidden min-h-full ${
              isSticky ? "justify-end gap-x-10 " : "mt-auto gap-x-6 "
            } flex-[2] xl:flex items-center text-sm font-[600]`}
          >
            {["top", "about", "What_we_do", "Business_sectors"].map(
              (section) => {
                const linkClass = `transition ease-in duration-300 hover:underline ${
                  (isAboutUsPage || isWhoWeDoPage || isBusinessSectorsPage) &&
                  !isSticky
                    ? "text-white"
                    : selectedSection === section && isSticky
                    ? "text-secondary"
                    : "text-primary"
                }`;

                if (section === "top") {
                  return (
                    <Link key={section} to="/" className={linkClass}>
                      {t("Home")}
                    </Link>
                  );
                }

                if (section === "about") {
                  return (
                    <Link key={section} to="/about-us" className={linkClass}>
                      {t("about")}
                    </Link>
                  );
                }

                if (section === "What_we_do") {
                  return (
                    <Link key={section} to="/who-we-do" className={linkClass}>
                      {t(section)}
                    </Link>
                  );
                }

                if (section === "Business_sectors") {
                  return (
                    <Link
                      key={section}
                      to="/business-sectors"
                      className={linkClass}
                    >
                      {t(section)}
                    </Link>
                  );
                }

                return null;
              }
            )}
          </nav>

          <div className="flex-1">
            <Link to="/">
              <img
                className={`cursor-pointer transition-width ease-in duration-200 xl:mx-auto mt-2 ${
                  isSticky ? "w-3/4" : "w-1/2 md:w-1/3 xl:w-full"
                }`}
                src={logo}
                alt="Company Logo"
              />
            </Link>
          </div>
          <nav
            className={`hidden min-h-full ${
              isSticky ? "gap-x-10" : "mt-auto justify-end gap-x-6"
            } flex-[2] xl:flex items-center text-sm font-[600]`}
          >
            {["our_partners_header", "Our_clients", "contact"].map(
              (section) => {
                let linkColor = "text-primary";

                if (!isSticky) {
                  if (isAboutUsPage || isWhoWeDoPage || isBusinessSectorsPage) {
                    linkColor = "text-white";
                  } else if (
                    isPartnersPage ||
                    isClientsPage ||
                    isContactUsPage
                  ) {
                    linkColor = "text-primary";
                  }
                }

                const linkClass = `transition ease-in duration-300 hover:underline ${linkColor}`;

                if (section === "our_partners_header") {
                  return (
                    <Link key={section} to="/partners" className={linkClass}>
                      {t(section)}
                    </Link>
                  );
                }

                if (section === "Our_clients") {
                  return (
                    <Link key={section} to="/clients" className={linkClass}>
                      {t(section)}
                    </Link>
                  );
                }

                if (section === "contact") {
                  // إضافة الرابط الخاص بـ "Contact Us"
                  return (
                    <Link key={section} to="/contact-us" className={linkClass}>
                      {t("Contact_us")}
                    </Link>
                  );
                }

                return (
                  <a
                    key={section}
                    className={linkClass}
                    href="/"
                    onClick={(e) => handleNavigation(e, section)}
                  >
                    {t(section === "contact" ? "Contact_us" : section)}
                  </a>
                );
              }
            )}
          </nav>

          <button className="xl:hidden" onClick={toggleMobileView}>
            {mobileMenuVisible ? <X size={32} /> : <List size={32} />}
          </button>

          {/* drawer */}
          <div
            className={`fixed bg-primary border-b border-white shadow-2xl shadow-[#000] right-0 w-[100vw] z-[1000] text-white transition ease-in duration-300 ${
              mobileMenuVisible
                ? "translate-y-[0] opacity-100 select-auto visible"
                : "translate-y-[-150%] opacity-0 select-none invisible"
            }`}
            style={{
              top: `${headerHeight}px`, // Set the top position of the drawer to the header's height
            }}
          >
            <nav
              className={`px-4 py-10 flex flex-col transition ease-in duration-500 ${
                mobileMenuVisible ? "scale-1" : "scale-50"
              }`}
            >
              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "top");
                }}
              >
                {t("Home")}
              </a>
              <Link
                to="/about-us"
                className="border-b border-white py-2"
                onClick={() => toggleMobileView()}
              >
                {t("about")}
              </Link>

              <Link
                to="/who-we-are"
                className="border-b border-white py-2"
                onClick={() => toggleMobileView()}
              >
                {t("What_we_do")}
              </Link>

              <Link
                to="/business-sectors"
                className="border-b border-white py-2"
                onClick={() => toggleMobileView()}
              >
                {t("Business_sectors")}
              </Link>

              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "our_partners");
                }}
              >
                {t("our_partners_header")}
              </a>
              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "Our_clients");
                }}
              >
                {t("Our_clients")}
              </a>
              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "contact");
                }}
              >
                {t("Contact_us")}
              </a>
              <div className="border-b border-white py-2">
                <LanguageSwitcher isBanner={true} />
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

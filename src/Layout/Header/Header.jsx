import React, { useState, useEffect, useRef } from "react";
import Container from "Components/Container/Container";
import logo from "assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
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

  return (
    <header
      ref={headerRef} // Reference to the header element
      className={`transition ease-in duration-300 ${
        isSticky ? "sticky top-0 z-[1000] bg-white" : ""
      }`}
    >
      <Container className={`${isSticky ? "" : "relative"}`}>
        <div
          className={`absolute transition ease-in duration-300 rounded-md p-1 hidden lg:block border border-primary ${
            isSticky ? "top-1/2 -translate-y-1/2 right-4" : "top-4 right-0"
          }`}
        >
          <LanguageSwitcher />
        </div>
        <div className="flex justify-between uppercase text-primary">
          <nav
            className={`hidden min-h-full ${
              isSticky ? "justify-end gap-x-10 " : "mt-auto gap-x-6 "
            } flex-[2] xl:flex items-center text-sm font-[600]`}
          >
            {["top", "about", "What_we_do"].map((section) => (
              <a
                key={section}
                className={`transition ease-in duration-300 hover:underline ${
                  selectedSection === section && isSticky
                    ? "text-secondary"
                    : "text-primary"
                }`}
                href="/"
                onClick={(e) => handleNavigation(e, section)}
              >
                {t(section === "top" ? "Home" : section)}
              </a>
            ))}
          </nav>
          <div className="flex-1">
            <img
              className={`cursor-pointer transition-width ease-in duration-200 py-2 xl:mx-auto object-contain ${
                isSticky ? "w-[6rem] lg:w-1/3" : "w-[10rem] w-3/4"
              }`}
              src={logo}
              alt="Company Logo"
              onClick={(e) => handleNavigation(e, "top")}
            />
          </div>
          <nav
            className={`hidden min-h-full ${
              isSticky ? "gap-x-10" : "mt-auto justify-end gap-x-6"
            } flex-[2] xl:flex items-center text-sm font-[600]`}
          >
            {["Business_sectors", "Our_subsidiaries", "contact"].map(
              (section) => (
                <a
                  key={section}
                  className={`transition ease-in duration-300 hover:underline ${
                    selectedSection === section && isSticky
                      ? "text-secondary"
                      : "text-primary"
                  }`}
                  href="/"
                  onClick={(e) => handleNavigation(e, section)}
                >
                  {t(section === "contact" ? "Contact_us" : section)}
                </a>
              )
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;

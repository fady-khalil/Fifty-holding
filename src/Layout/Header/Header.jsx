import React, { useState, useEffect, useRef } from "react";
import Container from "Components/Container/Container";
import logo from "assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { List } from "@phosphor-icons/react";

const Header = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [mobileMenuVisible, setMobileMenuVisble] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Reference to the header element
  const headerRef = useRef(null);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
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
      <Container className="relative">
        <div className="absolute top-4 right-0 hidden lg:block">
          <LanguageSwitcher />
        </div>
        <div className="flex justify-between uppercase text-primary">
          <nav
            className={`hidden min-h-full ${
              isSticky ? "justify-end gap-x-10" : "mt-auto gap-x-6 "
            } flex-[2] xl:flex items-center text-sm font-[600]`}
          >
            <a href="/" onClick={(e) => handleNavigation(e, "top")}>
              {t("Home")}
            </a>
            <a href="/" onClick={(e) => handleNavigation(e, "about")}>
              {t("about")}
            </a>
            <a href="/" onClick={(e) => handleNavigation(e, "whatWeDo")}>
              {t("What_we_do")}
            </a>
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
            } flex-[2] xl:flex items-center text-sm font-[600] `}
          >
            <a href="/" onClick={(e) => handleNavigation(e, "sectors")}>
              {t("Business_sectors")}
            </a>
            <a href="/" onClick={(e) => handleNavigation(e, "subsidiaries")}>
              {t("Our_subsidiaries")}
            </a>
            <a href="/" onClick={(e) => handleNavigation(e, "contact")}>
              {t("Contact_us")}
            </a>
          </nav>

          <button onClick={toggleMobileView} className="xl:hidden">
            {/* Custom Hamburger Icon */}
            <div
              className={`w-6 h-6 flex flex-col justify-between items-center transition-all duration-300 ${
                mobileMenuVisible ? "rotate-45 space-y-0" : "space-y-1"
              }`}
            >
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  mobileMenuVisible ? "rotate-90 absolute top-1/2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  mobileMenuVisible ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  mobileMenuVisible ? "-rotate-40 absolute top-1/2" : ""
                }`}
              ></div>
            </div>
          </button>

          <div
            className={`${
              mobileMenuVisible
                ? "fixed bg-[#0000006d] inset-0 h-full w-full z-[100]"
                : ""
            }`}
            style={{
              top: `${headerHeight}px`, // Set the top position of the drawer to the header's height
            }}
          ></div>

          {/* The drawer */}
          <div
            className={`fixed bg-primary right-0 w-[100vw] z-[1000] text-white transition ease-in duration-300 ${
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
              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "about");
                }}
              >
                {t("about")}
              </a>
              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "whatWeDo");
                }}
              >
                {t("What_we_do")}
              </a>
              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "sectors");
                }}
              >
                {t("Business_sectors")}
              </a>
              <a
                className="border-b border-white py-2"
                href="/"
                onClick={(e) => {
                  toggleMobileView();
                  handleNavigation(e, "subsidiaries");
                }}
              >
                {t("Our_subsidiaries")}
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
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

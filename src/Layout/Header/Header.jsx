import React, { useState, useEffect } from "react";
import Container from "Components/Container/Container";
import logo from "assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true); // New state for tracking top position

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
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsAtTop(scrollTop === 0);
      if (scrollTop > lastScrollTop) {
        setIsSticky(false); // Scrolling down
      } else {
        setIsSticky(scrollTop > 0); // Scrolling up and not at top
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  console.log();
  return (
    <header
      className={`transition ease-in duration-300  ${
        isSticky ? "sticky top-0 z-[1000] bg-white" : "-top-10"
      }`}
    >
      <Container className="relative">
        <div className="absolute top-4 right-0">
          <LanguageSwitcher />
        </div>
        <div className="flex justify-between uppercase text-primary">
          <nav className="min-h-full smt-auto flex-1 flex items-center gap-x-6 text-sm font-[600]">
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
          <div>
            <img
              className={`cursor-pointer transition-width ease-in duration-200 py-2 mx-auto object-contain ${
                isSticky || !isAtTop ? "w-1/3" : "w-3/4"
              }`}
              src={logo}
              alt="Company Logo"
              onClick={(e) => handleNavigation(e, "top")}
            />
          </div>
          <nav className="min-h-full smt-auto flex-1 flex items-center gap-x-6 text-sm font-[600] justify-end">
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
        </div>
      </Container>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import Container from "Components/Container/Container";
import logo from "assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { List } from "@phosphor-icons/react";

const Header = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

      // Set isSticky to true if scroll is not at the top, otherwise false
      setIsSticky(scrollTop > 0);

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`transition ease-in duration-300  ${
        isSticky ? "sticky top-0 z-[1000] bg-white" : "-top-10"
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
            } flex-1 xl:flex items-center  text-sm font-[600]`}
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
          <div>
            <img
              className={`cursor-pointer transition-width ease-in duration-200 py-2 xl:mx-auto object-contain ${
                isSticky ? "w-[6rem] lg:w-1/3" : "w-[10rem] lg:w-3/4"
              }`}
              src={logo}
              alt="Company Logo"
              onClick={(e) => handleNavigation(e, "top")}
            />
          </div>
          <nav
            className={`hidden min-h-full ${
              isSticky ? "gap-x-10" : "mt-auto justify-end gap-x-6"
            } flex-1 xl:flex items-center  text-sm font-[600] `}
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

          <button className="xl:hidden">
            <List size={32} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;

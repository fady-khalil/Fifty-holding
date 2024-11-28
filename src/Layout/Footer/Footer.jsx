import Container from "Components/Container/Container";
import React from "react";
import logo from "assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
  return (
    <footer className=" border-t-[2px]  border-primary">
      <Container className="py-14">
        <div className="flex lg:items-center lg:justify-center">
          <img
            onClick={(e) => handleNavigation(e, "top")}
            className="w-[14rem] md:mx-auto"
            src={logo}
            alt=""
          />
        </div>

        <nav className="uppercase text-primary min-h-full  flex-1 flex flex-col md:flex-row md:items-center md:justify-center mt-14 gap-y-4  gap-x-8 text-sm font-[600]">
          <a href="/" onClick={(e) => handleNavigation(e, "top")}>
            {t("Home")}
          </a>
          <a onClick={(e) => handleNavigation(e, "about")} href="/">
            {t("about")}
          </a>
          <a onClick={(e) => handleNavigation(e, "whatWeDo")} href="/">
            {t("What_we_do")}
          </a>
          <a onClick={(e) => handleNavigation(e, "sectors")} href="/">
            {t("Business_sectors")}
          </a>
          <a onClick={(e) => handleNavigation(e, "subsidiaries")} href="/">
            {t("Our_subsidiaries")}
          </a>
          <a onClick={(e) => handleNavigation(e, "contact")} href="/">
            {t("Contact_us")}
          </a>
        </nav>
      </Container>

      <div className="bg-[#afc2af] md:text-center py-4  text-white">
        <Container>
          <p>All Rights Reserved International Fifty Hodling Co 2024</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

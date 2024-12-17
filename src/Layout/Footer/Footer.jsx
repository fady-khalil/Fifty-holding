import Container from "Components/Container/Container";
import React from "react";
import logo from "assets/50-l.jpg";
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
    <footer id="contact" className=" border-t-[2px]  border-primary">
      <Container className="py-14">
        <div className="flex flex-col  lg:items-center lg:justify-center">
          <img
            onClick={(e) => handleNavigation(e, "top")}
            className="w-[20rem] md:mx-auto"
            src={logo}
            alt=""
          />

          <p class="mt-2 text-primary font-medium md:text-center">
            {t("address")}
          </p>
          <div className="flex items-center gap-x-2 mt-2 text-primary font-medium md:text-center">
            <p>{t("Contact_us")}:</p>
            <a
              className="transiton ease-in duration-300 hover:underline hover:text-secondary"
              href="mailto:info@50holding.sa"
            >
              info@50holding.sa
            </a>
          </div>
        </div>

        <nav className="uppercase  min-h-full  flex-1 flex flex-col md:flex-row md:items-center md:justify-center mt-14 gap-y-4  gap-x-8 text-sm font-[600]">
          <a
            className="transition ease-in duration-300 text-primary hover:underline hover:text-secondary"
            href="/"
            onClick={(e) => handleNavigation(e, "top")}
          >
            {t("Home")}
          </a>
          <a
            className="transition ease-in duration-300 text-primary hover:underline hover:text-secondary"
            onClick={(e) => handleNavigation(e, "about")}
            href="/"
          >
            {t("about")}
          </a>
          <a
            className="transition ease-in duration-300 text-primary hover:underline hover:text-secondary"
            onClick={(e) => handleNavigation(e, "What_we_do")}
            href="/"
          >
            {t("What_we_do")}
          </a>
          <a
            className="transition ease-in duration-300 text-primary hover:underline hover:text-secondary"
            onClick={(e) => handleNavigation(e, "Business_sectors")}
            href="/"
          >
            {t("Business_sectors")}
          </a>
          <a
            className="transition ease-in duration-300 text-primary hover:underline hover:text-secondary"
            onClick={(e) => handleNavigation(e, "Our_subsidiaries")}
            href="/"
          >
            {t("Our_subsidiaries")}
          </a>
          {/* <a
            className="transition ease-in duration-300 text-primary hover:underline hover:text-secondary"
            onClick={(e) => handleNavigation(e, "contact")}
            href="/"
          >
            {t("Contact_us")}
          </a> */}
        </nav>
      </Container>

      <div className="bg-[#afc2af] md:text-center py-4  text-white">
        <Container>
          <p>{t("rights")}</p>
          <p>
            By{" "}
            <a
              className="hover:underline"
              target="_blank"
              href="https://www.brandraw.sa/"
              rel="noreferrer"
            >
              Brandraw
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

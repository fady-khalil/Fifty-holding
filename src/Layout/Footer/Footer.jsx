import Container from "Components/Container/Container";
import React from "react";
import logo from "assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=" border-t-[2px]  border-primary">
      <Container className="py-14">
        <div className="flex lg:items-center lg:justify-center">
          <img className="w-[14rem] md:mx-auto" src={logo} alt="" />
        </div>

        <nav className="uppercase text-primary min-h-full  flex-1 flex flex-col md:flex-row md:items-center md:justify-center mt-14 gap-y-4  gap-x-8 text-sm font-[600]">
          <a href="/">{t("Home")}</a>
          <a href="/">{t("about")}</a>
          <a href="/">{t("What_we_do")}</a>
          <a href="/">{t("Business_sectors")}</a>
          <a href="/">{t("Our_subsidiaries")}</a>
          <a href="/">{t("Contact_us")}</a>
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

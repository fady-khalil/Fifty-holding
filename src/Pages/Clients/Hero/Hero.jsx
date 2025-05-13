import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Hero = ({ i18n }) => {
  const { t } = useTranslation();
  const [bannerData, setBannerData] = useState({
    title: "",
    image: "",
  });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const lang = i18n.language;
        const response = await axios.get(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${lang}/clients`
        );
        if (response.data.about_banner) {
          setBannerData(response.data.about_banner);
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, [i18n.language]);

  const imageUrl = bannerData.image ? bannerData.image.replace(/\\/g, "/") : "";

  return (
    <div
      className="w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "",
      }}
    >
      <div className="flex items-center h-full">
        <h1
          className={`text-white text-4xl font-bold ${
            i18n.language === "ar" ? "text-right pr-24" : "text-left pl-24"
          }`}
        >
          {bannerData.title || t("Our_clients")}
        </h1>
      </div>
    </div>
  );
};

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

export default Hero;

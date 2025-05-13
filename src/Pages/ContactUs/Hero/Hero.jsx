import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const apiUrl = `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/contacts`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.about_banner) {
          setBannerData(data.about_banner);
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, [i18n.language]);

  return (
    <div
      className="w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          bannerData ? bannerData.image : "default-image.jpg"
        })`,
      }}
    >
      <div className="flex items-center h-full">
        <h1
          className={`text-white text-4xl font-bold ${
            i18n.language === "ar" ? "text-right pr-24" : "text-left pl-24"
          }`}
        >
          {bannerData ? bannerData.title : t("Contact_us")}
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

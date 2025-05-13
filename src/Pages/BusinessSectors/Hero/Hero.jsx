import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = ({ i18n }) => {
  const { t } = useTranslation();
  const [bannerData, setBannerData] = useState({
    title: "",
    image: "",
  });

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/bussiness-sectores`
        );
        const data = await response.json();
        if (data.about_banner) {
          setBannerData({
            title: data.about_banner.title,
            image: data.about_banner.image.replace(/\\/g, "/"),
          });
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanner();
  }, [i18n.language]);

  return (
    <div
      className="w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerData.image})`,
      }}
    >
      <div className="flex items-center h-full">
        <h1
          className={`text-white text-4xl font-bold ${
            i18n.language === "ar" ? "text-right pr-24" : "text-left pl-24"
          }`}
        >
          {bannerData.title}
        </h1>
      </div>
    </div>
  );
};

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});

export default Hero;

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
    const fetchBanner = async () => {
      try {
        const response = await axios.get(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/about-us`
        );
        if (response.data.about_banner) {
          setBannerData(response.data.about_banner);
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
          {bannerData.title || t("about_us_title")}
        </h1>
      </div>
    </div>
  );
};

export default Hero;

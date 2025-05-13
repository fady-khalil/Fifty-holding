import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "Components/Container/Container";
import axios from "axios";
import "../css/About.css";

const About = ({ i18n }) => {
  const { i18n: i18nInstance } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [investmentData, setInvestmentData] = useState({
    title: "",
    sub_title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = i18nInstance.language;
        const response = await axios.get(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${lang}/about-us`
        );
        setInvestmentData(response.data.about_investment);
      } catch (error) {
        console.error("Error fetching about investment data:", error);
      }
    };

    fetchData();
  }, [i18nInstance.language]);

  return (
    <Container>
      <section
        className={`about-container mx-auto flex py-12 ${
          isArabic ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-1/2">
          <div
            className="w-full h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${investmentData.image})`,
            }}
          ></div>
        </div>
        <div className={`w-1/2 ${isArabic ? "text-right" : "text-left"}`}>
          <p className="mt-4 text-sm text-brown">{investmentData.sub_title}</p>
          <h3 className="about-brief font-bold whitespace-pre-line">
            {investmentData.title.split(" ").join("\n")}
          </h3>
          <p className="mt-4 text-sm text-brown">
            {investmentData.description}
          </p>
        </div>
      </section>
    </Container>
  );
};

export default About;

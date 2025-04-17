import React from "react";
import { useTranslation } from "react-i18next";
import v0 from "assets/Values/high-quality.png";
import v1 from "assets/Values/s1.png";
import v2 from "assets/Values/s2.png";
import v3 from "assets/Values/s3.png";
import v4 from "assets/Values/s4.png";
import v5 from "assets/Values/s5.png";
import Container from "Components/Container/Container";

const Values = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("quality"),
      text: t("quality_text"),
      icon: v0,
    },
    {
      title: t("Integrity"),
      text: t("Integrity_text"),
      icon: v1,
    },
    {
      title: t("Excellence"),
      text: t("Excellence_text"),
      icon: v2,
    },
    {
      title: t("Collaboration"),
      text: t("Collaboration_text"),
      icon: v3,
    },
    {
      title: t("Sustainability"),
      text: t("Sustainability_text"),
      icon: v4,
    },
    {
      title: t("Responsiveness"),
      text: t("Responsiveness_text"),
      icon: v5,
    },
  ];
  return (
    <section className="bg-dark_primary  py-20 lg:py-32">
      <Container>
        <h6 className="  mb-10 text-secondary  text-3xl uppercase">
          {t("values")}
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {data.map(({ title, text, icon }, index) => (
            <div
              key={index}
              className="w-full mx-autos bg-primary py-6 px-2 rounded-lg stext-center shine-effect"
            >
              <img
                className="w-1/3 md:w-1/2 object-contain"
                src={icon}
                alt=""
              />
              <h4 className="uppercase text-lg text-white al-medium my-2">
                {title}
              </h4>
              <p className="text-white text-sm">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;

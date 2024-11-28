import Container from "Components/Container/Container";
import React from "react";
import banner from "assets/about-bg.jpg";
import { useTranslation } from "react-i18next";
import Values from "./Values";
const About = () => {
  const { t } = useTranslation();
  const values = [
    {
      title: t("vision"),
      text: t("vision_text"),
    },
    {
      title: t("mission"),
      text: t("mission_text"),
    },
  ];
  return (
    <section
      className="-mt-[20vh] background bg-primary"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Container>
        <div className="text-center pt-[28vh] w-3/4 mx-auto">
          <h2 className="text-secondary uppercase tracking-wider text-lg">
            {t("about")}
          </h2>
          <p className="mt-2 text-white text-3xl al-medium">
            {t("about_header")}
          </p>
          <p className="text-white text-l">{t("about_text_one")}</p>
          <p className="text-white text-l">{t("about_text_two")}</p>
        </div>

        <div className="py-32 flex gap-x-32">
          {values.map(({ title, text }, index) => (
            <div className="flex-1 border border-secondary px-8 py-4 text-center text-white rounded-xl">
              <p className="al-medium text-2xl capitalize">{title}</p>
              <p className="mt-1 text-lg">{text}</p>
            </div>
          ))}
        </div>
      </Container>
      <Values />
    </section>
  );
};

export default About;

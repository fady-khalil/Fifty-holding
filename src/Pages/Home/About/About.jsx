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
      array: t("vision_text", { returnObjects: true }),
    },
    {
      title: t("mission"),
      array: t("mission_text", { returnObjects: true }),
    },
  ];
  return (
    <section
      className="-mt-[20vh] background bg-primary "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Container>
        <div className="pt-[28vh] lg:w-3/4 mx-auto">
          <h2 className="text-secondary  text-3xl uppercase">{t("about")}</h2>
          <p className="mt-2 text-white text-xl lg:text-2xl  al-medium">
            {t("about_header")}
          </p>
          <p className="text-white text-xl lg:text-2xl al-medium mt-2">
            {t("about_text_one")}
          </p>
          <p className="text-white text-xl lg:text-2xl   mt-2">
            {t("about_text_two")}
          </p>
          <p className="text-white text-xl lg:text-2xl   mt-2">
            {t("about_text_three")}
          </p>
          <p className="text-white text-xl lg:text-2xl   mt-2">
            {t("about_text_four")}
          </p>
        </div>

        <div className="py-20 lg:py-32 flex flex-col lg:flex-row gap-10 lg:px-32">
          {values.map(({ title, text, array }, index) => (
            <div
              key={index}
              className="flex-1 border transition ease-in duration-300 border-secondary hover:bg-secondary hover:border-priamry py-8 px-3  text-white rounded-xl"
            >
              <p className="al-medium text-3xl capitalize mb-4">{title}</p>
              <p className="">{text}</p>
              {array && Array.isArray(array) ? (
                <ul className="">
                  {array.map((item, index) => (
                    <li key={index} className="mt-1">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : array && typeof array === "string" ? (
                <p className="mt-2">{array}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
      <Values />
    </section>
  );
};

export default About;

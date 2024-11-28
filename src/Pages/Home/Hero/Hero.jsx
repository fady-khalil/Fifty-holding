import React from "react";
import banner from "assets/banner.jpg";
import Container from "Components/Container/Container";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-2 relative">
      <Container>
        <div
          className="lg:px-12 lg:py-24 bg-cover bg-center rounded-[99px]"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="text-white lg:w-[60%]">
            <h1 className="lg:text-6xl uppercase al-bold leading-[1.2] ">
              {t("hero_title")}
            </h1>
            <p className="lg:text-3xl">{t("hero_subTitle")}</p>

            <button className="bg-secondary px-6 py-2 mt-14 ">
              {" "}
              {t("Learn_more")}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

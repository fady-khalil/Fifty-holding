import Container from "Components/Container/Container";
import React from "react";
import { useTranslation } from "react-i18next";

import w1 from "assets/what_we_do/w1.png";
import w2 from "assets/what_we_do/w2.png";
import w3 from "assets/what_we_do/w3.png";
const WhatWeDo = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Subsidiary_Management"),
      text: t("Subsidiary_Management_text"),
      image: w1,
    },
    {
      title: t("Investment_Funds"),
      text: t("Investment_Funds_text"),
      image: w2,
    },
    {
      title: t("Real_Estate_and_Movables"),
      text: t("Real_Estate_and_Movables_text"),
      image: w3,
    },
  ];
  return (
    <section className="bg-primary py-primary">
      <Container>
        <h3 className="text-3xl text-secondary mb-10 text-center uppercase">
          {t("what_we_do")}
        </h3>
        <div className="flex gap-x-6">
          {data?.map(({ title, text, image }, index) => (
            <div className="flex-1 rounded-2xl" key={index}>
              <div className="relative">
                <img
                  className="h-[350px] object-cover rounded-2xl"
                  src={image}
                  alt=""
                />
                <div className="w-3/4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-40 backdrop-blur-xs text-center text-3xl p-10 rounded-xl">
                  <p>{title}</p>
                </div>
              </div>
              <p className="text-lg mt-2 text-white">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;

import Container from "Components/Container/Container";
import React from "react";
import { useTranslation } from "react-i18next";

import image1 from "assets/Subs/l2bg.png";
import logo1 from "assets/Subs/l2.png";
import image2 from "assets/Subs/l3bg.png";
import logo2 from "assets/Subs/l3.png";

const Subsidiaries = () => {
  const { t } = useTranslation();
  const data = [
    {
      image: image1,
      logo: logo1,
    },
    {
      image: image2,
      logo: logo2,
    },
  ];
  return (
    <section className="py-primary">
      <Container>
        <h3 className="text-3xl text-primary mb-6 text-center uppercase">
          {t("Our_subsidiaries")}
        </h3>

        <div className="flex gap-x-8">
          {data.map(({ image, logo }, index) => (
            <div
              className="background-cover h-[600px] flex-1 p-2 flex items-center justify-center"
              style={{ backgroundImage: `url(${image})` }}
              key={index}
            >
              <div className="bg-white rounded-xl p-4 h-1/2 w-1/2 flex items-center justify-center ">
                <img
                  className="w-3/4 h-3/4  object-contain"
                  src={logo}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Subsidiaries;

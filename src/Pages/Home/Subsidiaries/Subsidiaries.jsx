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
              className="background-cover group h-[600px] flex-1 relative p-2 flex items-center justify-center"
              // style={{ backgroundImage: `url(${image})` }}
              key={index}
            >
              <div className="absolute overflow-hidden inset-0 w-full h-full">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full transition ease-in duration-500 group-hover:scale-[1.1]"
                />
              </div>
              <div className="bg-white transition ease-in duration-300  bg-opacity-80 group-hover:bg-opacity-100 rounded-xl p-4 h-1/2 w-1/2 flex items-center justify-center relative z-[10] ">
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

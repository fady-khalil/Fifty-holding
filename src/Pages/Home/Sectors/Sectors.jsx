import Container from "Components/Container/Container";
import React from "react";
import { useTranslation } from "react-i18next";

import i1 from "assets/sector/1.jpg";
import i2 from "assets/sector/2.jpg";
import i3 from "assets/sector/3.jpg";
import i4 from "assets/sector/4.jpg";
import i5 from "assets/sector/5.jpg";
import i6 from "assets/sector/6.jpg";

const Sectors = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Construction_and_Infrastructure"),
      image: i1,
    },
    {
      title: t("Maintenance_and_Operations"),
      image: i2,
    },
    {
      title: t("Logistics_Services"),
      image: i3,
    },
    {
      title: t("Light_and_Medium_Industries"),
      image: i4,
    },
    {
      title: t("Military_Industries"),
      image: i5,
    },
    {
      title: t("Entertainment"),
      image: i6,
    },
  ];
  return (
    <section className="bg-secondary py-primary">
      <Container>
        <h4 className="text-3xl text-white mb-10 text-center uppercase">
          {t("Business_sectors")}
        </h4>

        <div className="grid grid-cols-3 gap-x-6 gap-y-14">
          {data.map(({ title, image }, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  className="h-[200px] transition ease-in duration-300 group-hover:scale-[1.05] w-full rounded-xl"
                  src={image}
                  alt=""
                />
              </div>
              <p className="text-center transition ease-in duration-300  group-hover:text-primary text-xl mt-2 uppercase text-white">
                {title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Sectors;

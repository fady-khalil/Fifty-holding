import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "Components/Container/Container";

import logo1 from "assets/clients/1.jpg";
import logo2 from "assets/clients/2.jpg";
import logo3 from "assets/clients/3.jpg";
import logo4 from "assets/clients/4.jpg";
import logo5 from "assets/clients/5.jpg";
import logo6 from "assets/clients/6.jpg";
import logo7 from "assets/clients/7.jpg";
import logo8 from "assets/clients/8.jpg";

const OurClients = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  const { t } = useTranslation();
  return (
    <section className="py-primary ">
      <Container>
        <h2 className="text-3xl text-primary mb-6 text-centser uppercase">
          {t("Our_clients")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {logos.map((logo, index) => (
            <img
              className="w-[95%] mx-auto"
              src={logo}
              alt={`Client ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurClients;

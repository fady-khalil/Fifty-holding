import React, { useEffect, useRef, useState } from "react";
import Container from "Components/Container/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import w1 from "assets/what_we_do/w1.png";
import w2 from "assets/what_we_do/w2.png";
import w3 from "assets/what_we_do/w3.png";

const WhatWeDo = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Determine the threshold value based on screen width
    const thresholdValue = window.innerWidth <= 768 ? 0.2 : 0.2;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: thresholdValue, // Dynamically set threshold
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Visible state
  };

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
    <section ref={sectionRef} className="bg-primary py-primary">
      <Container>
        <h3 className="text-3xl text-secondary mb-10 text-centser uppercase">
          {t("what_we_do")}
        </h3>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="flex flex-col lg:flex-row  gap-6"
        >
          {data?.map(({ title, text, image }, index) => (
            <motion.div
              className="flex-1 group rounded-2xl"
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: index * 0.2 }} // Sequential fade-in
            >
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    className="h-[350px] w-full transition ease-in duration-300 group-hover:scale-[1.05] object-cover rounded-2xl"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="w-3/4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition ease-in duration-300 text-white bg-black bg-opacity-40 group-hover:bg-opacity-60 backdrop-blur-xs text-censter text-3xl p-10 rounded-xl">
                  <p>{title}</p>
                </div>
              </div>
              <p className="text-lg mt-2 text-white">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhatWeDo;

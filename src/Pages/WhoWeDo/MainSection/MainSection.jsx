import React, { useEffect, useRef, useState } from "react";
import Container from "Components/Container/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          i18n.language === "ar"
            ? "https://phplaravel-1177998-5506307.cloudwaysapps.com/api/ar/who-we-are"
            : "https://phplaravel-1177998-5506307.cloudwaysapps.com/api/en/who-we-are"
        );
        const result = await response.json();
        setData(result.our_bussiness);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const thresholdValue = window.innerWidth <= 768 ? 0.2 : 0.2;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: thresholdValue,
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
  }, [i18n.language]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="bg-white py-primary">
      <Container>
        <h3 className="text-3xl text-secondary mb-10 text-center uppercase">
          {t("what_we_do")}
        </h3>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="flex flex-col gap-10 items-center"
        >
          {data.map(({ title, description, image }, index) => (
            <motion.div
              className="group rounded-2xl w-full max-w-2xl"
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-lg transition ease-in duration-300">
                  <img
                    className="h-[500px] w-full group-hover:scale-[1.05] object-cover rounded-2xl transition ease-in duration-300"
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="w-3/4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition ease-in duration-300 text-white bg-black bg-opacity-40 group-hover:bg-opacity-60 backdrop-blur-xs text-center text-5xl p-10 rounded-xl">
                  <p>{title}</p>
                </div>
              </div>
              <p
                className={`text-2xl mt-4 text-black ${
                  i18n.language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhatWeDo;

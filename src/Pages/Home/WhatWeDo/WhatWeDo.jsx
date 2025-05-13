import React, { useEffect, useRef, useState } from "react";
import Container from "Components/Container/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import axios from "axios";

const WhatWeDo = () => {
  const { i18n } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [businessData, setBusinessData] = useState([]);

  // Normalize Windows backslashes to forward slashes
  const getImageUrl = (rawUrl) => (rawUrl ? rawUrl.replace(/\\/g, "/") : "");

  useEffect(() => {
    const lang = i18n.language.startsWith("ar") ? "ar" : "en";
    axios
      .get(`https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${lang}/home`)
      .then(({ data }) => setBusinessData(data.our_bussiness || []))
      .catch((err) => console.error("Error fetching business data:", err));
  }, [i18n.language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="bg-primary py-20">
      <Container>
        <h3 className="text-3xl text-secondary mb-10 text-center uppercase">
          {i18n.language.startsWith("ar") ? "ما نقوم به" : "What We Do"}
        </h3>
        {!businessData.length ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="flex flex-col lg:flex-row gap-6"
          >
            {businessData.map(({ image, title, description }, index) => (
              <motion.div
                key={index}
                className="flex-1 group rounded-2xl overflow-hidden"
                variants={fadeInVariants}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative">
                  <img
                    src={getImageUrl(image)}
                    alt={title}
                    className="h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.05] rounded-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-40 group-hover:bg-opacity-60 backdrop-blur-sm text-white text-3xl p-10 rounded-xl text-center">
                      {title}
                    </div>
                  </div>
                </div>
                <p className="text-lg mt-2 text-white px-4">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default WhatWeDo;

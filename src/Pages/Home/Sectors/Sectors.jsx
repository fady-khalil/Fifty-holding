// src/Pages/Home/Sectors/Sectors.jsx

import React, { useEffect, useRef, useState } from "react";
import Container from "Components/Container/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import axios from "axios";

const Sectors = () => {
  const { i18n } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scoresData, setScoresData] = useState([]);

  // Normalize backslashes
  const getImageUrl = (rawUrl) => (rawUrl ? rawUrl.replace(/\\/g, "/") : null);

  useEffect(() => {
    const lang = i18n.language.startsWith("ar") ? "ar" : "en";
    axios
      .get(`https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${lang}/home`)
      .then(({ data }) => setScoresData(data.our_bussiness_scores || []))
      .catch((err) => console.error("Error fetching sectors data:", err));
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
    <section ref={sectionRef} className="bg-secondary py-20">
      <Container>
        <h4 className="text-3xl text-white mb-10 text-center uppercase">
          {i18n.language.startsWith("ar")
            ? "قطاعات الأعمال"
            : "Business Sectors"}
        </h4>

        {!scoresData.length ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            {scoresData.map(({ image, title }, index) => (
              <motion.div
                key={index}
                className="group"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ delay: index * 0.2 }}
              >
                <div className="overflow-hidden rounded-xl bg-gray-700">
                  {getImageUrl(image) ? (
                    <img
                      src={getImageUrl(image)}
                      alt={title}
                      className="h-[250px] object-cover lg:h-[200px] transition-transform duration-300 group-hover:scale-[1.05] w-full rounded-xl"
                    />
                  ) : (
                    <div className="h-[250px] lg:h-[200px] flex items-center justify-center w-full rounded-xl bg-gray-600">
                      <span className="text-white uppercase text-xl px-4 text-center">
                        {title}
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-center transition ease-in duration-300 group-hover:text-primary text-xl uppercase text-white">
                  {title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default Sectors;

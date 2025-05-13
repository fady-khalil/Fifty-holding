import React, { useEffect, useRef, useState } from "react";
import Container from "Components/Container/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import axios from "axios";

const Sectors = () => {
  const { i18n, t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const thresholdValue = window.innerWidth <= 768 ? 0.2 : 0.2;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: thresholdValue }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = i18n.language || "en";
        const response = await axios.get(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${lang}/bussiness-sectores`
        );
        setData(response.data.business_sectores || []);
      } catch (error) {
        console.error("Error fetching business sectors:", error);
      }
    };

    fetchData();
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
        <h4 className="text-3xl text-black mb-10 text-center uppercase">
          {t("Business_sectors")}
        </h4>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-24"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          {data.map(({ title, image }, index) => (
            <motion.div
              key={index}
              className="group"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: index * 0.2 }}
            >
              <div className="overflow-hidden">
                <img
                  className="h-[300px] object-cover lg:h-[250px] transition ease-in duration-300 group-hover:scale-[1.05] w-full"
                  src={image}
                  alt={title}
                />
              </div>

              <div
                className="text-center py-8 min-h-[120px] rounded-b-3xl"
                style={{
                  backgroundColor: "#304c2c",
                  borderBottom: "4px solid #ffffff",
                }}
              >
                <p className="transition ease-in duration-300 group-hover:text-primary text-xl uppercase text-white">
                  {title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Sectors;

import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "Components/Container/Container";
import axios from "axios";

const Subsidiaries = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const locale = i18n.language || "en"; // Use current language
        const response = await axios.get(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${locale}/home`
        );
        setImages(response.data?.our_partners || []);
      } catch (error) {
        console.error("Failed to fetch partners data:", error);
      }
    };

    fetchData();
  }, [i18n.language]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="pt-primary">
      <Container>
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-3xl text-primary mb-6 text-center uppercase"
        >
          {t("our_partners")}
        </motion.h3>

        {/* Images Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {images.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <img
                src={item.image.replace(/\\/g, "/")}
                alt={`Subsidiary ${index + 1}`}
                className="w-full h-[250px] object-contain lg:h-[200px] p-1 border border-secondary rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Subsidiaries;

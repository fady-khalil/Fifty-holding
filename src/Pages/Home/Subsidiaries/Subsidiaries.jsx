import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "Components/Container/Container";

import image1 from "assets/Subs/l2bg.png";
import logo1 from "assets/Subs/l2.png";
import image2 from "assets/Subs/l3bg.png";
import logo2 from "assets/Subs/l3.png";

const Subsidiaries = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Trigger animation when 50% of the section is visible
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
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2, // Delay between children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-primary">
      <Container>
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl text-primary mb-6 text-center uppercase"
        >
          {t("Our_subsidiaries")}
        </motion.h3>

        {/* Subsidiaries Cards */}
        <motion.div
          className="flex gap-x-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} // Replay animation based on visibility
        >
          {data.map(({ image, logo }, index) => (
            <motion.div
              className="background-cover group h-[600px] flex-1 relative p-2 flex items-center justify-center"
              key={index}
              variants={cardVariants}
            >
              {/* Background Image */}
              <div className="absolute overflow-hidden inset-0 w-full h-full">
                <img
                  src={image}
                  alt={`Subsidiary Background ${index + 1}`}
                  className="w-full h-full transition ease-in duration-500 group-hover:scale-[1.1]"
                />
              </div>

              {/* Logo Container */}
              <div className="bg-white transition ease-in duration-300 bg-opacity-80 group-hover:bg-opacity-100 rounded-xl p-4 h-1/2 w-1/2 flex items-center justify-center relative z-[10]">
                <motion.img
                  className="w-3/4 h-3/4 object-contain"
                  src={logo}
                  alt={`Subsidiary Logo ${index + 1}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Subsidiaries;

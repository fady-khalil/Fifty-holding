import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "Components/Container/Container";

// 1
import image1 from "assets/Subs/1.jpg";
import image2 from "assets/Subs/2.jpg";
import image3 from "assets/Subs/3.jpg";
import image4 from "assets/Subs/4.jpg";
import image5 from "assets/Subs/5.png";
const Subsidiaries = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const data = [image1, image2, image3, image4, image5];

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
        threshold: 0.1, // Trigger animation when 50% of the section is visible
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
        duration: 0.3,
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
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="pt-primary ">
      <Container>
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-3xl text-primary mb-6 text-csenter uppercase"
        >
          {t("our_partners")}
        </motion.h3>

        {/* Subsidiaries Cards */}
        <motion.div
          className="grid grid-cols-5 gap-8 justify-center items-center"
          // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} // Replay animation based on visibility
        >
          {data.map((image, index) => (
            <motion.div className={``} key={index} variants={cardVariants}>
              <img
                src={image}
                alt={`Subsidiary Background ${index + 1}`}
                className="w-full h-[200px] p-2 border border-secondary rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Subsidiaries;

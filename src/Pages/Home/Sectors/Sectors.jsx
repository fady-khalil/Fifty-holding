import React, { useEffect, useRef, useState } from "react";
import Container from "Components/Container/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import i1 from "assets/sector/1.jpg";
import i2 from "assets/sector/2.jpg";
import i3 from "assets/sector/3.jpg";
import i4 from "assets/sector/4.jpg";
import i5 from "assets/sector/5.jpg";
import i6 from "assets/sector/6.jpg";

const Sectors = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Determine the threshold value based on screen width
    const thresholdValue = window.innerWidth <= 768 ? 0.2 : 0.5;

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
  }, []);

  // Fade-in animation for the grid items
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
    <section ref={sectionRef} className="bg-secondary py-primary">
      <Container>
        <h4 className="text-3xl text-white mb-10 text-center uppercase">
          {t("Business_sectors")}
        </h4>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14"
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
              transition={{ delay: index * 0.2 }} // Sequential fade-in for each item
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  className="h-[250px] object-cover lg:h-[200px] transition ease-in duration-300 group-hover:scale-[1.05] w-full rounded-xl"
                  src={image}
                  alt={title}
                />
              </div>
              <p className="text-center transition ease-in duration-300 group-hover:text-primary text-xl mt-2 uppercase text-white">
                {title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Sectors;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import banner from "assets/banner.jpg";
import banner_ar from "assets/banner-ar.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the hero section is visible
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

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="mt-4 relative">
      <div className="px-[1.5rem] md:px-[3rem] xl:px-[6px] xxl:px-[4rem]">
        <div
          className="py-14 md:py-20 md:px-8 px-4 xl:px-12 xl:py-24 bg-cover bg-center rounded-2xl lg:rounded-[72px]"
          style={{
            backgroundImage: `url(${
              i18n.language === "ar" ? banner_ar : banner
            })`,
          }}
        >
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-white md:w-3/4 lg:w-[60%]"
          >
            <h1
              className={`text-2xl md:text-4xl lg:text-5xl xxl:text-6xl uppercase al-bold ${
                i18n.language === "ar" ? "xxl:leading-snug" : "xxl:leading-none"
              } `}
            >
              {t("hero_title")}
            </h1>
            <p className="text-lg md:text-2xl xl:text-3xl">
              {t("hero_subTitle")}
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavigation(e, "about")}
              className="bg-secondary transition ease-in duration-300 border border-transparent hover:border-secondary hover:bg-transparent px-6 py-2 mt-6 lg:mt-14"
            >
              {t("Learn_more")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

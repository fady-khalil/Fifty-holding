// src/components/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ isHome }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        localStorage.setItem("language", lng);
        updateDirection(lng);
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error changing language:", err);
      });
  };

  const updateDirection = (lng) => {
    if (lng === "ar") {
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.removeAttribute("dir");
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div>
      {/* <div className={`${i18n.language === "ar" ? "mr-auto" : "ml-auto"}  `}> */}
      <select onChange={handleLanguageChange} defaultValue={i18n.language}>
        <option className="text-black" value="en">
          English
        </option>
        <option className="text-black" value="ar">
          العربية
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

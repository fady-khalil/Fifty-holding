// src/components/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ isBanner }) => {
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
      <select
        className={isBanner ? "bg-black text-white" : ""}
        onChange={handleLanguageChange}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Container from "Components/Container/Container";

const Values = ({ i18n }) => {
  const { t } = useTranslation();
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const response = await axios.get(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/about-us`
        );
        const data = response.data.our_values;
        setValues(data);
      } catch (error) {
        console.error("Error fetching values data:", error);
      }
    };

    fetchValues();
  }, [i18n.language]);

  return (
    <section className="bg-dark_primary py-10 lg:py-16">
      <Container>
        <h6 className="mb-10 text-secondary text-3xl uppercase text-center">
          {t("values")}
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {values.map(({ title, description, image }, index) => (
            <div
              key={index}
              className="w-full py-6 px-4 rounded-xl text-center"
            >
              <div
                className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  borderColor: "#bea25f",
                  borderStyle: "dotted",
                  borderWidth: "2px",
                }}
              >
                {image && (
                  <img
                    className="w-2/3 h-2/3 object-contain"
                    src={image}
                    alt={title}
                  />
                )}
              </div>
              <h4
                className="uppercase text-lg text-white font-medium my-2"
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                style={{
                  textAlign: i18n.language === "en" ? "left" : "right",
                }}
              >
                {title}
              </h4>
              <p
                className="text-white text-sm"
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                style={{
                  textAlign: i18n.language === "en" ? "left" : "right",
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;

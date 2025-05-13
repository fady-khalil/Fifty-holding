import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "Components/Container/Container";
import axios from "axios";

const Values = () => {
  const { i18n } = useTranslation();
  const [valuesData, setValuesData] = useState(null);

  // Helper to normalize backslashes in URLs
  const getImageUrl = (rawUrl) => {
    if (!rawUrl) return "";
    return rawUrl.replace(/\\/g, "/");
  };

  useEffect(() => {
    axios
      .get(`https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/home`)
      .then(({ data }) => {
        setValuesData(data.our_values);
      })
      .catch((err) => {
        console.error("Error fetching values data:", err);
      });
  }, [i18n.language]);

  if (!valuesData) {
    return (
      <section className="bg-dark_primary py-20 lg:py-32">
        <Container>
          <p className="text-center text-white">Loading values...</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-dark_primary py-20 lg:py-32">
      <Container>
        <h6 className="mb-10 text-secondary text-3xl uppercase">
          {i18n.language === "ar" ? "قيمنا" : "Values"}
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {valuesData.map(({ image, title, description }, index) => (
            <div
              key={index}
              className="w-full mx-auto bg-primary py-6 px-2 rounded-lg text-center shine-effect"
            >
              {image && (
                <img
                  className="w-1/3 md:w-1/2 object-contain mx-auto mb-4"
                  src={getImageUrl(image)}
                  alt={title}
                />
              )}
              <h4 className="uppercase text-lg text-white al-medium my-2">
                {title}
              </h4>
              <p className="text-white text-sm">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;

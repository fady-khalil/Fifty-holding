import React, { useEffect, useState } from "react";
import Container from "Components/Container/Container";
import Values from "./Values";
import axios from "axios";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  const [aboutData, setAboutData] = useState(null);
  const [visionData, setVisionData] = useState(null);
  const [missionData, setMissionData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/home`)
      .then(({ data }) => {
        setAboutData(data.about);
        setVisionData(data.our_vision);
        setMissionData(data.our_mission);
      })
      .catch((err) => {
        console.error("Error fetching About section:", err);
      });
  }, [i18n.language]);

  // Helper to split description into paragraphs
  const renderParagraphs = (text) => {
    if (!text) return null;
    return text.split(/\r\n/).map((line, idx) =>
      line.trim() ? (
        <p key={idx} className="text-white text-xl lg:text-2xl al-medium mt-2">
          {line}
        </p>
      ) : null
    );
  };

  if (!aboutData || !visionData || !missionData) {
    return (
      <section className="py-20">
        <Container>
          <p className="text-center">Loading...</p>
        </Container>
      </section>
    );
  }

  const values = [
    {
      title: visionData.title,
      description: visionData.description,
    },
    {
      title: missionData.title,
      description: missionData.description,
    },
  ];

  return (
    <section className="-mt-[20vh] background bg-primary">
      <Container>
        <div className="pt-[28vh] lg:w-3/4 mx-auto">
          <h2 className="text-secondary text-3xl uppercase">
            {aboutData.title}
          </h2>
          {renderParagraphs(aboutData.description)}
        </div>

        <div className="py-20 lg:py-32 flex flex-col lg:flex-row gap-10 lg:px-32">
          {values.map(({ title, description }, index) => (
            <div
              key={index}
              className="flex-1 border transition ease-in duration-300 border-secondary hover:bg-secondary hover:border-primary py-8 px-3 text-white rounded-xl"
            >
              <p className="al-medium text-3xl capitalize mb-4">{title}</p>
              {renderParagraphs(description)}
            </div>
          ))}
        </div>
      </Container>

      <Values />
    </section>
  );
};

export default About;

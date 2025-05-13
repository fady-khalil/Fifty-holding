import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "Components/Container/Container";
import axios from "axios";
import "../css/About.css";

const Mission = ({ i18n }) => {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [mission, setMission] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const response = await axios.get(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/about-us`
        );
        const data = response.data.our_mission;
        setMission({
          title: data.title,
          description: data.description,
        });
      } catch (error) {
        console.error("Error fetching mission data:", error);
      }
    };

    fetchMission();
  }, [i18n.language]);

  return (
    <section className="w-full bg-[#bea25f] py-12">
      <Container>
        <div className={`w-full ${isArabic ? "text-right" : "text-left"}`}>
          <div className="border-8 border-white p-16">
            <h3 className="text-3xl font-bold mb-6 text-white text-center">
              {mission.title}
            </h3>
            <div className="space-y-4 text-white text-lg leading-[1.2] font-bold">
              <p>{mission.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;

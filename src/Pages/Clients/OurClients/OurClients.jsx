import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "Components/Container/Container";

const OurClients = () => {
  const { t, i18n } = useTranslation();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(
          `https://phplaravel-1177998-5506307.cloudwaysapps.com/api/${i18n.language}/clients`
        );
        const data = await response.json();
        setClients(data.our_clients);
      } catch (error) {
        console.error("Error fetching clients data:", error);
      }
    };
    fetchClients();
  }, [i18n.language]);

  return (
    <section className="py-primary">
      <Container>
        <h2 className="text-3xl text-primary mb-6 text-center uppercase">
          {t("Our_clients")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {clients.map((client, index) => (
            <img
              key={index}
              className="w-[95%] mx-auto"
              src={client.image}
              alt={`Client ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurClients;

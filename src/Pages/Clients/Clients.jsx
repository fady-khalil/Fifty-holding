import { useTranslation } from "react-i18next";
import Hero from "./Hero/Hero";
import OurClients from "./OurClients/OurClients";
const Clients = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="about-us p-0">
      <section id="hero">
        <Hero i18n={i18n} />
      </section>
      <section id="our-clients">
        <OurClients />
      </section>
    </main>
  );
};

export default Clients;

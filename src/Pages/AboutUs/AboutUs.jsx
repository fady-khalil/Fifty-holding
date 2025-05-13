import { useTranslation } from "react-i18next";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Vision from "./Vision/Vision";
import Mission from "./Mission/Mission";
import OurClients from "./OurClients/OurClients";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="about-us p-0">
      <section id="hero">
        <Hero i18n={i18n} />
      </section>
      <section id="about">
        <About i18n={i18n} />
      </section>
      <section id="vision">
        <Vision i18n={i18n} />
      </section>
      <section id="OurClients">
        <OurClients i18n={i18n} />
      </section>
      <section id="mission">
        <Mission i18n={i18n} />
      </section>
    </main>
  );
};

export default AboutUs;

import { useTranslation } from "react-i18next";
import Hero from "./Hero/Hero";
import MainSection from "./MainSection/MainSection";
const WhoWeDo = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="about-us p-0">
      <section id="hero">
        <Hero i18n={i18n} />
      </section>
      <section id="mainsection">
        <MainSection i18n={i18n} />
      </section>
    </main>
  );
};

export default WhoWeDo;

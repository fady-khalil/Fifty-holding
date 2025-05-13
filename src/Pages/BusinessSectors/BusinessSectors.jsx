import { useTranslation } from "react-i18next";
import Hero from "./Hero/Hero";
import Sectors from "./Sectors/Sectors";
const WhoWeDo = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="about-us p-0">
      <section id="hero">
        <Hero i18n={i18n} />
      </section>
      <section id="sectors">
        <Sectors />
      </section>
    </main>
  );
};

export default WhoWeDo;

import Hero from "./Hero/Hero";
import About from "./About/About";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Sectors from "./Sectors/Sectors";
import Subsidiaries from "./Subsidiaries/Subsidiaries";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="whatWeDo">
        <WhatWeDo />
      </section>
      <section id="sectors">
        <Sectors />
      </section>
      <section id="subsidiaries">
        <Subsidiaries />
      </section>
    </main>
  );
};

export default Home;

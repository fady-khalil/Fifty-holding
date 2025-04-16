import Hero from "./Hero/Hero";
import About from "./About/About";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Sectors from "./Sectors/Sectors";
import Subsidiaries from "./Subsidiaries/Subsidiaries";
import OurClients from "./OurClients/OurClients";
const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="What_we_do">
        <WhatWeDo />
      </section>
      <section id="Business_sectors">
        <Sectors />
      </section>
      <section id="our_partners">
        <Subsidiaries />
      </section>
      <section id="Our_clients">
        <OurClients />
      </section>
    </main>
  );
};

export default Home;

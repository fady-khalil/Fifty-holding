import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home/Home";
import AboutUs from "Pages/AboutUs/AboutUs";
import WhoWeDo from "Pages/WhoWeDo/WhoWeDo";
import BusinessSectors from "Pages/BusinessSectors/BusinessSectors";
import Partners from "Pages/Partners/Partners";
import Clients from "Pages/Clients/Clients";
import ContactUs from "Pages/ContactUs/ContactUs";
import Header from "Layout/Header/Header";
import Footer from "Layout/Footer/Footer";

import "i18n/i18n";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/who-we-do" element={<WhoWeDo />} />
        <Route path="/business-sectors" element={<BusinessSectors />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

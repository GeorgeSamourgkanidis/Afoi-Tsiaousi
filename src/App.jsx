import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import { useState } from "react";

import Header from "./Components/Header/Header";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import Products from "./Components/Products/Products";
import Portofolio from "./Components/Portofolio/Portofolio";
import Company from "./Components/Company/Company";
import Customers from "./Components/Customers/Customers";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [lang, setLang] = useState("gr");

  const changeLanguage = (value) => {
    setLang(value);
    if (value === "en") {
      document.title = "AFOI TSIAOUSI & SIA O.E.";
    } else {
      document.title = "ΑΦΟΙ ΤΣΙΑΟΥΣΗ & ΣΙΑ Ο.Ε.";
    }
  };

  return (
    <div id='page-top'>
      <NavbarMenu lang={lang} onChangeLanguage={changeLanguage} />

      {/* Title */}
      <Header lang={lang} />

      {/* Products */}
      <div className='page-section' id='services'>
        <Products lang={lang} />
      </div>

      {/* Projects */}
      <div className='page-section bg-light' id='portfolio'>
        <Portofolio lang={lang} />
      </div>

      {/* Company */}
      <div className='page-section' id='about'>
        <Company lang={lang} />
      </div>

      {/* Customers */}
      <Customers />

      {/* Contact */}
      <section className='page-section' id='contact'>
        <Contact lang={lang} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

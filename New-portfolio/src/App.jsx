import React from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

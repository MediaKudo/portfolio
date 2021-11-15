import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gradient from "./Gradient";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navigation />
      </header>
      <main>
        <About />
        <Gradient />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

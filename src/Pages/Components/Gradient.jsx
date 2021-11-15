import React, { useEffect } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const Gradient = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="gradient-container">
      <Skills aos="fade-up"></Skills>

      <Projects aos="fade-up"></Projects>
    </section>
  );
};

export default Gradient;

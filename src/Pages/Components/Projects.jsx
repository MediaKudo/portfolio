import React from "react";
import { Slide } from "react-slideshow-image";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import "react-slideshow-image/dist/styles.css";

/**
 * Propriétés de react-slideshow
 */
const properties = {
  transitionDuration: 500,
  arrows: false,
  autoplay: false,
  indicators: (i) => <div className="indicator"></div>,
};
//--------------------------------

const Projects = (props) => {
  return (
    <article className="projects-container" data-aos={props.aos} id="projects">
      <h2>My Projects</h2>
      <div className="slides-container">
        <div className="slide-container">
          <Slide {...properties}>
            <Project1 />
            <Project2 />
            <Project3 />
          </Slide>
        </div>
      </div>
    </article>
  );
};

export default Projects;

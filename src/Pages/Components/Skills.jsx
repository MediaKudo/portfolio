import React from "react";

const Skills = (props) => {
  return (
    <article className="skills-container" data-aos={props.aos} id="skills">
      <h2>My Skills</h2>
      <div className="skills-content">
        <div className="skills">
          <div className="skill">
            <div className="skill-header">
              <div className="skill-title">HTML/CSS</div>
              <div className="skill-title">70%</div>
            </div>
            <div className="skill-bars">
              <div className="skill-green green-70"></div>
              <div className="skill-gray gray-30"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <div className="skill-title">PHP7</div>
              <div className="skill-title">80%</div>
            </div>
            <div className="skill-bars">
              <div className="skill-green green-80"></div>
              <div className="skill-gray gray-20"></div>
            </div>
          </div>{" "}
          <div className="skill">
            <div className="skill-header">
              <div className="skill-title">MySql</div>
              <div className="skill-title">40%</div>
            </div>
            <div className="skill-bars">
              <div className="skill-green green-40"></div>
              <div className="skill-gray gray-60"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <div className="skill-title">Javascript</div>
              <div className="skill-title">80%</div>
            </div>
            <div className="skill-bars">
              <div className="skill-green green-80"></div>
              <div className="skill-gray gray-20"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <div className="skill-title">Jquery</div>
              <div className="skill-title">50%</div>
            </div>
            <div className="skill-bars">
              <div className="skill-green green-50"></div>
              <div className="skill-gray gray-50"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <div className="skill-title">ReactJs</div>
              <div className="skill-title">60%</div>
            </div>
            <div className="skill-bars">
              <div className="skill-green green-60"></div>
              <div className="skill-gray gray-40"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-header">
              <div className="skill-title">Symfony 5.2</div>
              <div className="skill-title">90%</div>
            </div>
            <div className="skill-bars">
              <div className="skill-green green-90"></div>
              <div className="skill-gray gray-10"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;

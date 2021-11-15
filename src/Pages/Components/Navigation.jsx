import React, { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <a href="#about" className="nav-link">
            About me
          </a>
          <a href="#skills" className="nav-link">
            My skills
          </a>
          <a href="#projects" className="nav-link">
            My projects
          </a>
        </div>
        <div className="nav-center">
          <img src="./img/logo.svg" alt="" />
        </div>
        <div className="nav-right">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div
          className={`menu-btn  ${active ? "animated" : ""}`}
          onClick={toggleActive}
        >
          <div className="menu-btn-burger"></div>
        </div>
      </nav>
      <div className={`responsive-menu  ${active ? "show" : ""}`}>
        <a href="#about" className="nav-link" onClick={toggleActive}>
          About me
        </a>
        <a href="#skills" className="nav-link" onClick={toggleActive}>
          My skills
        </a>
        <a href="#projects" className="nav-link" onClick={toggleActive}>
          My projects
        </a>
        <a href="#contact" className="nav-link" onClick={toggleActive}>
          contact
        </a>
      </div>
    </>
  );
};

export default Navigation;

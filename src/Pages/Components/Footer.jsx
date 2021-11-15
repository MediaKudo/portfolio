import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-link">
            <a href="#aboutme">About me</a>
          </div>
          <div className="footer-link">
            <a href="#skills">my skills</a>
          </div>
          <div className="footer-link">
            <img src="./img/logo.svg" alt="" />
          </div>
          <div className="footer-link">
            <a href="#projects">my projects</a>
          </div>
          <div className="footer-link">
            <a href="#contact">contacts</a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="copyright">
          © Maskrot Karim - Tous droits résérvés - 2021/2022
        </div>
      </div>
    </div>
  );
};

export default Footer;

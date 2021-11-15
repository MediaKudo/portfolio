import React from "react";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
        <div className="links">
          <h2 className="contact-title">Contacts</h2>
          <p className="contact-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dolore, doloremque quam sunt cumque quis illum, vitae ullam saepe
            delectus, accusamus earum!
          </p>
          <div className="infos">
            <div className="info">
              <i className="far fa-envelope"></i> karimmaskrot@gmail.com
            </div>
            <div className="info">
              <i className="fas fa-phone-square-alt"></i> (+33)06.27.66.18.18
            </div>
            <div className="info">
              <i className="fas fa-map-marker-alt"></i> 11 rue Zamenhof, 57300 -
              Hagondange
            </div>
          </div>
          <div className="reseaux">
            <div className="reseau">
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
            <div className="reseau">
              <i className="fab fa-facebook-square fa-2x"></i>
            </div>
            <div className="reseau">
              <i className="fab fa-github-square fa-2x"></i>
            </div>
            <div className="reseau">
              <i className="fab fa-discord fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="contact-me">
          <div className="contact">
            <h2 className="contact-title">Send me a message!</h2>
            <div className="contact-form">
              <form action="#">
                <div className="block">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Joe"
                    id="name"
                    className="name"
                  />
                </div>
                <div className="block">
                  <label>Mail</label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    id="mail"
                    className="mail"
                  />
                </div>

                <div className="message">
                  <textarea
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    className="textarea"
                  ></textarea>
                </div>
                <div className="contact-btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

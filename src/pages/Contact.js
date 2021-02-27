import React from "react";
import Mouse from "../component/Mouse";
import Navigation from "../component/Navigation";
import Logo from "../component/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../component/SocialNetwork";
import ButtonsBottom from "../component/ButtonsBottom";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>address</h4>
              <p>Iran , isfahan</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>phone number</h4>
              <CopyToClipboard className="hover" text="+989019740369">
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    alert("copy phone number!!!");
                  }}
                  className="clipboard"
                >
                  +989019740369
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="sadeghrafiei80@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    alert("copy email address!!!");
                  }}
                >
                  sadeghrafiei80@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
              <p>fromScratch - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'} />
      </div>
    </main>
  );
};

export default Contact;

import React, { useContext } from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import { LanguageContext } from '../../LanguageContext';

const ContactMe = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="contact" className="contact-container">
      <h5>{language === 'en' ? 'Contact Me' : 'Свяжитесь со мной'}</h5>

      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="shehatesogk@gmail.com"
          />

          <a href="https://www.instagram.com/shehatesogk">
            <ContactInfoCard
              iconUrl="./assets/images/instagram-icon.svg"
                text="Instagram"
            />
          </a>

          <a href="https://github.com/shehatesogk">
          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="GitHub"
          />
          </a>

          <a href="https://www.linkedin.com/in/nuray-aman/">
          <ContactInfoCard
            iconUrl="./assets/images/linkedin-icon.svg"
            text="LinkedIn"
          />
          </a>
        </div>

        <div style={{flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

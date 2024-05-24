import React, { useContext } from "react";
import "./Hero.css";
import { LanguageContext } from '../../LanguageContext';

const Hero = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>
          {language === 'en' ? 'Crafting Engaging Digital Experiences' : 'Создание увлекательных цифровых опытов'}
        </h2>
        <p>
          {language === 'en' ? 'Passionate Frontend Developer | Implementing Your Ideas' : 'Страстный фронтенд-разработчик | Воплащение ваших идей в реальность'}
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <img src="./assets/images/img11.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

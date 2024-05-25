import React, { useRef, useContext } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE_EN, WORK_EXPERIENCE_RU } from "../../utils/data";
import Slider from "react-slick";
import { LanguageContext } from '../../LanguageContext';

const WorkExperience = () => {
  const { language } = useContext(LanguageContext);
  const currentExperience = language === 'en' ? WORK_EXPERIENCE_EN : WORK_EXPERIENCE_RU;
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id='work-exp' className="experience-container">
      <h5>{language === 'en' ? 'Work Experience' : 'Опыт работы'}</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span class="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {currentExperience.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;

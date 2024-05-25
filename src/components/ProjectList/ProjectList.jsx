// src/components/ProjectList.jsx
import React, { useRef, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { LanguageContext } from '../../LanguageContext';
import './ProjectList.css';

const ProjectList = () => {
  const { language } = useContext(LanguageContext);
  const [repos, setRepos] = useState([]);
  const sliderRef = useRef();
  const maxProjects = 6;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/shehatesogk/repos');
        setRepos(response.data.slice(0, maxProjects));
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

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
    <section id='projects' className="project-container">
      <h5>{language === 'en' ? 'My Projects' : 'Мои Проекты'}</h5>

      <div className="project-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {repos.map((repo) => (
            <div className="project-item" key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{repo.name}</h3>
              </a>
              <p>{repo.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectList;

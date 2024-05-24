import React, { useState, useContext } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { SKILLS_EN, SKILLS_RU } from "../../utils/data";
import { LanguageContext } from '../../LanguageContext';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const currentSkills = language === 'en' ? SKILLS_EN : SKILLS_RU;
  const [selectedSkill, setSelectedSkill] = useState(currentSkills[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section id="skills" className="skills-container">
      <h5>{language === 'en' ? 'Technical Proficiency' : 'Техническая компетентность'}</h5>

      <div className="skills-content">
        <div className="skills">
          {currentSkills.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

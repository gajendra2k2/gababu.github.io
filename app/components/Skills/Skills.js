import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { leadershipImpactSkills, technologyLeadershipSkills } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    const renderSkillSection = (skills, title) => (
        <div className="skillsSection">
            <div className="skillsSectionHeader">
                <h3 style={{color: theme.primary}}>{title}</h3>
            </div>
            <div className="skill--scroll">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skills.map((skill, id) => (
                        <div className="skill--box" key={id} style={skillBoxStyle}>
                            <img src={skillsImage(skill)} alt={skill} />
                            <h4 style={{color: theme.tertiary}}>
                                {skill}
                            </h4>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );

    return (
        <div id="skills" className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsContainer">
                {renderSkillSection(leadershipImpactSkills, "Leadership")}
                {renderSkillSection(technologyLeadershipSkills, "Technology")}
            </div>
        </div>
    )
}

export default Skills

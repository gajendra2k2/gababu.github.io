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

    const renderScrollingSkillSection = (skills, title) => (
        <div className="skillsSection">
            <div className="skillsSectionHeader">
                <h3 style={{color: theme.primary}}>{title}</h3>
            </div>
            <div className="skill--static">
                <div className="skill--static-container">
                    {skills.map((skill, id) => (
                        <div className="skill--box" key={id} style={skillBoxStyle}>
                            <img src={skillsImage(skill)} alt={skill} />
                            <h4 style={{color: theme.tertiary}}>
                                {skill}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderStaticSkillSection = (skills, title) => (
        <div className="skillsSection">
            <div className="skillsSectionHeader">
                <h3 style={{color: theme.primary}}>{title}</h3>
            </div>
            <div className="skill--static">
                <div className="skill--static-container">
                    {skills.map((skill, id) => (
                        <div className="skill--box" key={id} style={skillBoxStyle}>
                            <img src={skillsImage(skill)} alt={skill} />
                            <h4 style={{color: theme.tertiary}}>
                                {skill}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div id="skills" className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsContainer">
                <div className="skillsSectionWrapper">
                    {renderStaticSkillSection(leadershipImpactSkills, "Leadership")}
                    <div className="line-styling">
                      <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                      <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                      <div className="style-line" style={{backgroundColor: theme.primary}}></div>
                    </div>
                </div>
                <div className="skillsSectionWrapper">
                    {renderScrollingSkillSection(technologyLeadershipSkills, "Technology")}
                    <div className="line-styling">
                      <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                      <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                      <div className="style-line" style={{backgroundColor: theme.primary}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

import React, { useContext, useState } from 'react';
import Section from '../Styled/Section';

import Skill from '../components/Projects/Project';
import { projectEs, projectEn } from '../components/Projects/projectData';
import { LanguageContext } from '../contexts/LanguageContext';

const Skills = () => {
    let projectData = projectEs;

    let title = "Proyectos";

    const { data } = useContext(LanguageContext);

    if(data.locale === 'es') {
        title = "Proyectos";
        projectData = projectEs;
    } else if(data.locale === 'en') {
        title = "Projects"
        projectData = projectEn;
    }

    return (
        <Section id="portfolio">
            <h1>{title}</h1>
            {projectData.map((project, index) => {
                return <Skill key={index} title={project.title} desc={project.desc} techs={project.techs} img={project.img} links={project.links} />
            })}
        </Section>
        )
}

export default Skills;
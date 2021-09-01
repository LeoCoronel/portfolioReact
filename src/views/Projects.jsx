import React, { useContext, useState } from 'react';
import Section from '../Styled/Section';

import { LanguageContext } from '../contexts/LanguageContext';
import Project from '../components/Projects/Project';
import { projectEs, projectEn } from '../components/Projects/projectData';

const Skills = () => {

    let projectData = projectEs;
    let title = "Proyectos";

    const { data } = useContext(LanguageContext);

    if(data.locale === 'es') {
        projectData = projectEs;
        title = "Proyectos";
    } else if(data.locale === 'en') {
        projectData = projectEn;
        title = "Projects"
    }

    return (
        <Section id="portfolio">
            <h1>{title}</h1>
            {projectData.map((project, index) => {
                return <Project key={index} title={project.title} desc={project.desc} techs={project.techs} img={project.img} links={project.links} />
            })}
        </Section>
        )
}

export default Skills;
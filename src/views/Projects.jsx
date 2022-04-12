import React, { useContext, useState } from 'react';
import Section from '../Styled/Section';

import { LanguageContext } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel/Carousel';

const Skills = () => {
    let title = "Proyectos";

    const { data } = useContext(LanguageContext);

    if(data.locale === 'es') {
        title = "Proyectos";
    } else if(data.locale === 'en') {
        title = "Projects"
    }

    return (
        <Section id="portfolio">
            <h1>{title}</h1>
            <Carousel />
        </Section>
        )
}

export default Skills;
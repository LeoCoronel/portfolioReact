import React, { useContext, useState } from 'react';
import Styled from 'styled-components';
import Section from '../Styled/Section';

import { LanguageContext } from '../contexts/LanguageContext';
import Skill from '../components/Skills/Skill';
import { skillEs, skillEn } from '../components/Skills/skillData';

const Ul = Styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media only screen and (min-width: 800px){
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 1em;
    }
`

const Skills = () => {

    let skillData = skillEs;

    const { data, setData, toggleData } = useContext(LanguageContext);

    if(data.locale === 'es') {
        skillData = skillEs;
    } else if(data.locale === 'en') {
        skillData = skillEn;
    }

    return (
        <Section id="Skills">
            <Ul>
                {skillData.map((skill, index) => {
                    return <Skill key={index} title={skill.title} desc={skill.desc} items={skill.items} img={skill.img} />
                })}
            </Ul>
        </Section>
        )
}

export default Skills;
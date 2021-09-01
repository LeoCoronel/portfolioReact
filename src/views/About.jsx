import React, { useContext } from 'react';
import Section from '../Styled/Section';

import { FormattedMessage } from 'react-intl';

import AboutTop from '../components/About/AboutTop'
import Tabs from '../components/About/Tabs';

const About = () => {

    return (
        <Section id="about">
            <AboutTop />
            <Tabs />
        </Section>
        )
}

export default About;
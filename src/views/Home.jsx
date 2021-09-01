import React, { useContext } from 'react';
import Section from '../Styled/Section';
import Greeting from '../components/Greeting';
import Browser from '../components/Browser/Browser';

import { FormattedMessage } from 'react-intl';

const Home = ({setTheme, glTheme}) => {

    return (
        <Section id="home">
            <Greeting>&lt;<FormattedMessage id="app.greeting" defaultMessage="404 text no found" />/&gt;</Greeting>
            <Browser setTheme={setTheme} glTheme={glTheme}/>
        </Section>
        )
}

export default Home;
import React from "react";
import Styled from 'styled-components';

import Navbar from './Navbar';
import BrowserHome from './BrowserHome';

const IntroWrapper = Styled.div`
    background-color: ${(props) => props.theme.secondaryColor};
    border: 1px solid ${(props) => props.theme.borderColor};

    border-radius: 5px 5px 0 0;

    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            'nav-wrapper nav-wrapper'
            'left-column right-column'
        ;
    }
`

const Browser = ({setTheme, glTheme}) => {
    return (
        <IntroWrapper>
            <Navbar />
            <BrowserHome setTheme={setTheme} glTheme={glTheme} />
        </IntroWrapper>
    )
}

export default Browser;
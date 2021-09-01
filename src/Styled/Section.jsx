import React, {useState} from "react";
import Styled from 'styled-components';

const Section = Styled.section`

    padding: 4em 2em;
    text-align: center;

    h1 {
        color: ${(props) => props.theme.mainText};
    }

    @media only screen and (min-width: 1050px) {
    padding: 4em;
    }

    @media only screen and (min-width: 1250px) {
        padding: 10em 10em 4em 10em;
    }

    @media only screen and (min-width: 1550px) {
        padding: 6em 20em 4em 20em;
    }
`

export default Section;
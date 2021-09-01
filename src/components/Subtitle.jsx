import React, { useState, useEffect } from "react";
import Styled from 'styled-components';
import TextTransition, { presets } from "react-text-transition";

const Sub = Styled.h4`
    display: grid;
    text-align: center;
    place-content: center;
    color: ${(props) => props.theme.mainText};
    width: 100%;
    .animated-text {
        text-transform: uppercase;
        font-weight: bold;
        color: ${(props) => props.theme.subtitle};
        letter-spacing: .2em;
        font-size: .85em;
    }
}
`

const Subtitle = () => {
    const texts = ["creativity", "good times", "memories"]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return(
        <Sub>Develop <TextTransition
        className="animated-text"
        text={ texts[index % texts.length] }
        springConfig={ presets.wobbly }
        /></Sub>
    )
}

export default Subtitle;
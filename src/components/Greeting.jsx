import React, {useState} from "react";
import Styled from 'styled-components';

import Subtitle from './Subtitle';

const Title = Styled.div`
    display: grid;
    text-align: center;
    place-content: center;
    min-height: 20em;

    h1 {
        color: ${(props) => props.theme.mainText};
    }

    @media screen and (min-width: 800px) { /* Solo de 800px en adelante */
    h1 {
        border-right: 2px solid var(--mainText);
        overflow: hidden;
        white-space: nowrap;
        width: 16em;
        
        animation: typewriter 4s steps(40) 1s 1 normal both,
        blinkTextCursor 500ms steps(40) infinite normal;
    }
    
    @keyframes typewriter {
        from {
            width: 0;
        }
        to {
            width: 13em;
        }
    }
    
    @keyframes blinkTextCursor {
        from {
            border-right-color: var(--mainText);
        }
        to {
            border-right-color: transparent;
        }
    }
}
`

const Greeting = ({children}) => {
    return (
        <>
            <Title>
                <h1>{children}</h1>
                <Subtitle />
            </Title>
            
        </>
    )
}

export default Greeting;
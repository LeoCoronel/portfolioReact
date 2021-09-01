import React, {  } from "react";
import Styled from 'styled-components';
import Sun from '../Time/Sun';
import Stars from '../Time/Stars';

const Right = Styled.div`
                grid-area: right-column;
                display: grid;
                align-content: center;
                justify-content: center;
`

const RightColumn = ({glTheme}) => {
    
    return (
        <>
            
            <Right>
                {glTheme === "light" ? <Sun /> : <Stars />}
            </Right>
        </>
    )
}

export default RightColumn;
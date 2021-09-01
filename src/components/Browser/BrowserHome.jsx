import React from "react";
import Styled from 'styled-components';
import LeftColumn from './LeftColumn';
import RightColumn from "./RightColumn";

const BrowserHome = ({setTheme, glTheme}) => {
    return (
        <>
            <LeftColumn setTheme={setTheme} />
            <RightColumn glTheme={glTheme}/>
        </>
    )
}

export default BrowserHome;
import React, { useContext, useState } from "react";
import Styled from 'styled-components';

import { LanguageContext } from '../../contexts/LanguageContext';
import { FormattedMessage } from 'react-intl';

const Left = Styled.div`
                grid-area: left-column;
                padding: 2em 0;
                color: ${(props) => props.theme.mainText};

                #profile-pic {
                    display: block;
                    margin: .5em auto;
                    height: 200px;
                    width: 200px;
                    object-fit: cover; /* Adjust the image */
                    border: 2px solid ${(props) => props.theme.borderColor};
                }

                h5 {
                    text-align: center;
                }

                .theme-options {
                    display: flex;
                    justify-content: center;
                    height: 50px;

                    .theme-dot {
                        height: 30px;
                        width: 30px;
                        background-color: ${(props) => props.theme.secondaryText};
                        border-radius: 50%;
                    
                        margin: 5px;
                        border: 2px solid ${(props) => props.theme.themeDotBorder};
                    
                        -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
                        -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
                        box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
                    
                        cursor: pointer;
                    }
                    
                    .theme-dot:hover {
                        border-width: 3px;
                    }

                    #light-mode {
                        background-color: #fff;
                    }
                    
                    #dark-mode {
                        background-color: #192734;
                    }
                }

                h5 { text-align: center; }

                #settings-note {
                    font-size: .7em;
                    font-style: italic;
                    text-align: center;
                }

                button {
                    width: 150px;
                    height: 50px;
                    background: none;
                    border: 1px solid ${(props) => props.theme.mainText};
                    border-radius: 3px;
                    color: ${(props) => props.theme.mainText};
                    cursor: pointer;
                }

`

const LeftColumn = ({setTheme}) => {

    const { data, setData, toggleData } = useContext(LanguageContext);

    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <Left>
                <img src='https://raw.githubusercontent.com/LeoCoronel/portfolioReact/master/src/img/avataaars.png' alt="foto de perfil" id="profile-pic" />
                <h5><FormattedMessage id="app.theme" defaultMessage="404 text no found" /></h5>

                <div className="theme-options">
                    <div data-mode="light" id="light-mode" className="theme-dot" onClick={() => setTheme("light")}></div>
                    <div data-mode="blue" id="dark-mode" className="theme-dot" onClick={() => setTheme("dark")}></div>
                </div>

                {<button className="toggleLang" onClick={ () => { toggleData() } }><FormattedMessage id="app.lang" defaultMessage="404 text no found" /></button>}
                <div>{`${data.locale}`}</div>
                <p id="settings-note"><FormattedMessage id="app.save" defaultMessage="404 text no found" /></p>
            </Left>
        </>
    )
}

export default LeftColumn;
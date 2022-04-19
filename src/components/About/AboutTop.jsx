import React from "react";
import Styled from 'styled-components';

import { FormattedMessage } from 'react-intl';

const TopWrapper = Styled.div`
    .about-left {
        .about-title {
            color: ${(props) => props.theme.mainText};
            font-weight: bold;
            font-size: 1.3em;
            margin-top: -.4em;
            display: block;
        }
        .subtitle {
            text-transform: uppercase;
            font-weight: bold;
            color: ${(props) => props.theme.subtitle};
            letter-spacing: .2em;
            font-size: .85em;
        }

        .about-desc {
            color: ${(props) => props.theme.mainText};
            margin-bottom: 3em;
            font-size: .9em;
            line-height: 1.8em;
            font-weight: 500;
        }

        .cv-link {
            color: ${(props) => props.theme.subtitle};
        }
    }

    .about-right {
        .about-logo{
            height: 300px;
        }
    }

    @media only screen and (min-width: 800px) {
        text-align: left;
        display: grid;
        place-content: center;
        .about-top {
            display: grid;
            grid-template-columns: 50% auto;
            .about-left {
                display: grid;
                place-content: center;
            }
            .about-right {
                padding-left: 2em;
                padding-top: 1em;
            }
        }
        
    }
`

const AboutTop = () => {
    return (
        <TopWrapper>
            <div className="about-top">
                <div className="about-left">
                    <p class="subtitle"><FormattedMessage id="app.about" defaultMessage="404 text no found" /></p>
                    <p class="about-title">FrontEnd Developer</p>

                    <p class="about-desc"><FormattedMessage id="app.resume" defaultMessage="404 text no found" /> <a href="https://raw.githubusercontent.com/LeoCoronel/portfolioReact/1028055fb33d6c936d0ec9df7aeda2bd94ab9cac/src/Coronel_Leo_CV(es).pdf" class="cv-link" target="_blank"><FormattedMessage id="app.resume-cv" defaultMessage="404 text no found" /></a>.</p>
                    
                    <p class="about-desc"><FormattedMessage id="app.about-desc" defaultMessage="404 text no found" /></p>
                </div>

                <div className="about-right">
                    <img className="about-logo" src="https://raw.githubusercontent.com/LeoCoronel/portfolioReact/e3f37a86d63d77c461d5d567d977f2504e7fef09/src/img/icon-logo.svg" alt="logo" />
                </div>
            </div>
        </TopWrapper>
    )
}

export default AboutTop;
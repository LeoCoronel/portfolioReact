import React from "react";
import Styled from 'styled-components';

import { FormattedMessage } from 'react-intl';

const Nav = Styled.nav`
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    background-color: ${(props) => props.theme.mainColorSticky};
    border-radius: 5px 5px 0 0;
    z-index: 950;
    height: 50px;
    padding: 0 1em 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;

    &.sticky {
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        background-color: ${(props) => props.theme.mainColorSticky};
    }

    .dots-wrapper {
        //display: none;
    }
    ul {
        display: flex;
        justify-content: space-around;

        li {
            a {
                display: block; // Without this we cant apply padding
                padding: 0 1em;
                color: ${(props) => props.theme.mainText};
            }
        }
    }

    @media only screen and (min-width: 800px) {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-area: nav-wrapper;

        .dots-wrapper {
            display: flex;
            padding: 10px;

            a {
                display: flex;
            }
        }
        #dot-1 {
            background-color: #FC6058;
        }
        
        #dot-2 {
            background-color: #FEC02F;
        }
        
        #dot-3 {
            background-color: #2ACA3E;
        }

        .browser-dot {
            background-color: var(--secondaryText);
            height: 15px;
            width:15px;
            border-radius: 50%;
            margin: 5px;
            
            -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
            -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
            box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
        }
    }
`

const Navbar = () => {
    

    return (
        <>
        <Nav id="navbar" className="">
            <div className="dots-wrapper">
                <a href="#home" id="home-button">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                </a>
            </div>
            <ul id="navigation">
                <li><a href="#about" id="about-link"><FormattedMessage id="app.nav-about" defaultMessage="404 text no found" /></a></li>
                <li><a href="#portfolio" id="portfolio-link"><FormattedMessage id="app.nav-projects" defaultMessage="404 text no found" /></a></li>
                <li><a href="#contact" id="contact-link"><FormattedMessage id="app.nav-contact" defaultMessage="404 text no found" /></a></li>
            </ul>
        </Nav>
        </>
    )
}

export default Navbar;
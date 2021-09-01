import React from 'react';
import Section from '../Styled/Section';
import Styled from 'styled-components';

const Div = Styled.div`
    footer {
        display: flex;
        justify-content: space-around;
        color: ${(props) => props.theme.secondaryText};
        img {
            width: 50px;
        }
        p {
            color: ${(props) => props.theme.mainText};
        }
        span {
            color: ${(props) => props.theme.subtitle};
        }
    }
`

const Contact = () => {

    return (
        <Div id="footer">
            <footer>
                <img src="https://raw.githubusercontent.com/LeoCoronel/portfolioReact/master/src/img/icon-logo.svg" alt="logo" />
                <p>Copyright © | 2020 -  <span>Leo Coronel</span></p>
            </footer>
        </Div>
        )
}

export default Contact;
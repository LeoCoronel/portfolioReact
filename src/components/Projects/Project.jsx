import React from 'react';
import Styled from 'styled-components';

import {  FaReact, FaSass, FaGithub, FaHtml5, FaCss3 } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { CgWebsite } from 'react-icons/cg';

const Card = Styled.div`
    margin: 50px;
    .project-desc {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .inner {
            margin: 10px;
            .title {
                color: ${(props) => props.theme.subtitle};
                text-transform: uppercase;
                font-weight: bold;
                letter-spacing: .2em;
                font-size: .85em;
            }
            .card-desc {
                color: ${(props) => props.theme.mainText};
            }
        }

        .project-data {
            display: flex;
            width: 100%;
            justify-content: space-around;

            .technologies {
                color: ${(props) => props.theme.mainText};

                .tech {
                    margin: 5px;
                }
            }

            .links {
                .link-icon {
                    margin: 5px;
                }
                a {
                    color: ${(props) => props.theme.mainText};
                    text-decoration: none;
                }
            }
        }
    }
    a img {
        border-radius: 1em;
        margin-bottom: 2em;
        height: 100%;
    }

    @media only screen and (min-width: 800px) {
        display: grid;
        place-content: center;
    }

    @media only screen and (min-width: 1050px) {
        width: 100%;
        display: grid;
        grid-template-columns: 40% auto;
        text-align: left;
        .project-desc{
            display: grid;
            place-content: center;
        }
        a img {
        float: right;
        max-width: 500px;
        }
    }
`;

const Skill = ({title, desc, techs, img, links}) => {
    
    return(
        <Card>
            <div className="project-desc">
                <div className="inner">
                    <p className="title">{title}</p>
                    <p className="card-desc">{desc}</p>
                </div>
                <div className="project-data">
                    <div className="technologies">
                        {techs.map((item, index) => {
                            {
                                if(item === 'js') {
                                    return < DiJavascript1 size={30} className="tech" />
                                } else if(item === 'html') {
                                    return <FaHtml5 size={30} className="tech" />
                                } else if(item === 'react') {
                                    return <FaReact size={30} className="tech" />;
                                } else if (item === 'css') {
                                    return <FaCss3 size={30} className="tech" />;
                                } else if(item === 'sass') {
                                    return <FaSass size={30} className="tech" />;
                                }
                            }
                        })}
                    </div>
                    <div className="links">
                        <a href={links[0]} target='_blank'><CgWebsite size={30} className="link-icon" /></a>
                        <a href={links[1]} target='_blank'><FaGithub size={30} className="link-icon" /></a>
                    </div>
                </div>
            </div>
            <a href="#"><img src={`https://raw.githubusercontent.com/LeoCoronel/portfolioReact/master/src/img/${img}.png`} alt={img} /></a>
        </Card>
    )
}

export default Skill;
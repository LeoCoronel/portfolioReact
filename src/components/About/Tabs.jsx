import React, { useState, useEffect, useContext } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Styled from 'styled-components';

import { LanguageContext } from '../../contexts/LanguageContext';
import { dataEs, dataEn } from './data';
import { FormattedMessage } from 'react-intl';

const TabContainer = Styled.div`
    width: 100%;
    max-width: 1170px;
    margin-top: 150px;
    color: ${(props) => props.theme.mainText};
    .tabs-title {
        margin-bottom: 4rem;
        text-align: center;
    }

    .tabs-center {
        width: 80vw;
        margin: 0 auto;
        max-width: 1170px;

        .btn-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 4rem;
            flex-wrap: wrap;

            .tab-btn {
                color: ${(props) => props.theme.mainText};
                background: transparent;
                border-color: transparent;
                text-transform: capitalize;
                font-size: 1.25rem;
                letter-spacing: 0.1rem;
                margin: 0 0.5rem;
                transition: all 0.3s linear;
                cursor: pointer;
                padding: 0.25rem 0;
                line-height: 1;
                outline-color: ${(props) => props.theme.subtitle};

                &:hover {
                    color: ${(props) => props.theme.subtitle};
                    box-shadow: ${(props) => props.theme.subtitle};
                }
            }
            .active-btn {
                color: ${(props) => props.theme.subtitle};
                box-shadow: 0 2px ${(props) => props.theme.subtitle};
            }
        }
        .tab-info {
            h3 {
                font-weight: 400;
            }

            h4 {
                text-transform: uppercase;
                color: ${(props) => props.theme.subtitle};
                border: 1px solid ${(props) => props.theme.subtitle};
                display: inline-block;
                padding: 0.375rem 0.75rem;
                border-radius: 0.25rem;
            }

            .tab-date {
                letter-spacing: 0.1rem;
            }
            .tab-desc {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    column-gap: 2rem;
                    align-items: center;
                    margin-bottom: 1.25rem;

                    p {
                        margin-bottom: 0;
                        color: ${(props) => props.theme.mainText}
                    }
                }

                .tab-icon {
                    color: ${(props) => props.theme.subtitle};
                }
            }
    }

    @media screen and (min-width: 992px) {
    width: 95vw;
    height: 35vh;

    .tabs-center {
        width: 90vw;
        height:100%;
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 4rem;
        .btn-container {
            flex-direction: column;
            justify-content: center;

            .tab-btn {
                margin-bottom: 1rem;
                &:hover {
                    box-shadow: -2px 0 ${(props) => props.theme.subtitle};
                }
            }
            .active-btn {
                box-shadow: -2px 0 ${(props) => props.theme.subtitle};
            }
        }
    }
}
`

const Tabs = () => {

    let tabData = dataEs;

    const { data, setData, toggleData } = useContext(LanguageContext);

    if(data.locale === 'es') {
        tabData = dataEs;
    } else if(data.locale === 'en') {
        tabData = dataEn;
    }

    const [value, setValue] = useState(0);

    try {
        const {title, dates, info, type} = tabData[value];
    } catch (error) {
        console.log(error);
    }

    return (
        <TabContainer>
            {/*<div className="tabs-title">
                <h2><FormattedMessage id="app.about-aboutme" defaultMessage="404 text no found" /></h2>
            </div>*/}
            <div className="tabs-center">
                <div className="btn-container">
                    {tabData.map((item, index) => {
                        return (
                            <button key={item.id} onClick={() => {setValue(index)}} className={`tab-btn ${index === value && "active-btn"}`}>
                                {item.type}
                            </button>
                            )
                    })}
                </div>

                <article className="tab-info">
                    <h3>{tabData[value].title}</h3>
                    <h4>{tabData[value].type}</h4>
                    <p className="tab-date">{tabData[value].dates}</p>
                    {tabData[value].info.map((infoItem, index) => {
                        return <div key={index} className="tab-desc">
                            <FaAngleDoubleRight className="tab-icon"></FaAngleDoubleRight>
                            <p>{infoItem}</p>
                        </div>
                    })}
                </article>

            </div>
        </TabContainer>
    )
}

export default Tabs;
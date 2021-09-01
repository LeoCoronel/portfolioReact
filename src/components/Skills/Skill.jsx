import React from 'react';
import Styled from 'styled-components';

const Card = Styled.li`
    background: ${(props) => props.theme.secondaryColor};
    padding: 2em;
    border-radius: 1em;
    margin-bottom: 1em;
    color: ${(props) => props.theme.mainText};

    .icon-container {
        height: 100px;
        display: grid;
        place-content: center;
        margin: 0 auto;

        .icon-ux, .icon-logo {
            width: 50px;
        }

        .icon-frontend {
            width: 100px;
        }
    }
    .skill-title {
        font-weight: bold;
    }
    .card-desc {
        margin-bottom: 2em;
    }

    li {
        color: ${(props) => props.theme.mainText};
        font-size: .9em;
        font-weight: 500;
        cursor: pointer;
    }
    li:hover {
        color: ${(props) => props.theme.subtitle};
    }
    }
`;

const Skill = ({title, desc, items, img}) => {

    return(
        <Card>
            <div className="icon-container">
                <img src={`../../src/img/${img}.svg`} alt={`${img}`} className={`${img}`}/>
            </div>
            <p className="skill-title">{title}</p>
            <p className="card-desc">{desc}</p>
            <ul className="card-items">
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </Card>
    )
}

export default Skill;
import React from 'react';
import Styled from 'styled-components';

const Sky = Styled.div`
    width: 300px;
    height: 300px;
    background: linear-gradient(125deg, #15202B 0%, #192734 100%);
    clip-path: circle(50% at 50% 50%);
    border-radius: 50%;
    transform: rotateZ(45deg);
    z-index: 900;
    margin: 50px;

    .star {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #5f91ff, rgba(0,0,255,0));
    filter: drop-shadow(0 0 6px #699bff);
    animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}

.star::before, .star::after {
    position: absolute;
    content: '';
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
    border-radius: 100%;
    transform: translateX(50%) rotateZ(45deg);
    animation: shining 3000ms ease-in-out infinite;
}

.star::after {
    transform: translateX(50%) rotateZ(-45deg);
}

.star:nth-child(1) {
    top: calc(50% - 200px);
    left: calc(50% - 300px);
    animation-delay: 658ms;
}

.star:nth-child(1)::before, .star:nth-child(1)::after {
    animation-delay: 658ms;
}

.star:nth-child(2) {
    top: calc(50% - 50px);
    left: calc(50% - 190px);
    animation-delay: 150ms;
}

.star:nth-child(2)::before, .star:nth-child(2)::after {
    animation-delay: 150ms;
}

.star:nth-child(3) {
    top: calc(50% - -90px);
    left: calc(50% - 200px);
    animation-delay: 1600ms;
}

.star:nth-child(3)::before, .star:nth-child(3)::after {
    animation-delay: 1600ms;
}

.star:nth-child(4) {
    top: calc(50% - 50px);
    left: calc(50% - 250px);
    animation-delay: 4700ms;
}

.star:nth-child(4)::before, .star:nth-child(4)::after {
    animation-delay: 4700ms;
}

.star:nth-child(5) {
    top: calc(50% - -190px);
    left: calc(50% - 200px);
    animation-delay: 2100ms;
}

.star:nth-child(5)::before, .star:nth-child(5)::after {
    animation-delay: 2100ms;
}

/* Animations */
@keyframes tail {
    0% {
        width: 0;
    }
    30% {
        width: 100px;
    }
    100% {
        width: 0;
    }
}

@keyframes shining {
    0% {
        width: 0;
    }
    50% {
        width: 30px;
    }
    100% {
        width: 0px;
    }
}

@keyframes shooting {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(320px);
    }
}
`

const Stars = () => {
    return (
        <Sky>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
        </Sky>
    )
}

export default Stars;
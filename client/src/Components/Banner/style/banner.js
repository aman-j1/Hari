import styled, { keyframes } from 'styled-components';
import { Link as RouterLinks } from 'react-router-dom';

const tp_hotspot = keyframes`
    0% {
        transform: scale(.8);
        opacity: 0;
    }
    
    70% {
        opacity: 1;
    }
    100% {
        transform: scale(1.3);
        opacity: 0;
    }
`

const tp_hutspot2 = keyframes`
0% {
    transform: scale(.8);
    opacity: 0;
}

70% {
    opacity: 1;
}
100% {
    transform: scale(1.3);
    opacity: 0;
}
`;

export const BannerSection = styled.div`
    background-color: var(--tp-grey-17);
    min-height: 600px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;    
    overflow: hidden;    
`;

export const Containers = styled.div`
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }

    @media (min-width: 1400px) {
        max-width: 1320px;
    }
`;

export const Row = styled.div`
    align-self: flex-end;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
`;


export const BannerCol = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media screen and (min-width: 992px){
        flex: 0 0 auto;
        width: 50%;
    }

    @media screen and (min-width: 1200px){
        flex: 0 0 auto;
        width: 50%;
    }
`;

export const ContentInner = styled.div`
    position: relative;
    z-index: 11;
`;

export const SubHead = styled.span`
    font-family: var(--tp-ff-roboto);
    font-size: 16px;
    letter-spacing: .03em;
    color: var(--tp-text-1);
    position: relative;
    padding-left: 13px;
    display: inline-block;
    line-height: 1.12;
    margin-bottom: 11px;

    &::after{
        position: absolute;
        content: "";
        left: 0;
        top: -2px;
        width: 2px;
        height: 37px;
        background-color: var(--tp-theme-1);
    }
`;

export const BannerTitle = styled.h3`
        font-family: var(--tp-ff-roboto);
    font-weight: 500;
    font-size: 80px;
    line-height: 1.05;
    letter-spacing: -.01em;
    margin-bottom: 45px;
    animation-delay: .5s;
    animation-duration: 1s;
`;

export const BannerButton = styled(RouterLinks)`
    color: var(--tp-common-black);
    border: 1.5px solid var(--tp-common-black);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--tp-ff-roboto);
    padding: 7px 33px;
    display: inline-block;
    text-align: center;
    background: transparent;
    transition: all 0.3s ease;

    &:hover{
        background-color: var(--tp-common-black);
        color: #fff;
    }

    & > span{
        margin-left: 2px;
    }
`;


export const ThumbSec = styled.div`
    text-align: right;
    margin-right: 40x;
        position: relative;
    z-index: 1;
`;

export const Circle1 = styled.span`
    animation-delay: 1s;
    position: absolute;
    top: -30%;
    right: -25%;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    background-color: var(--tp-common-white);
    animation: ${tp_hotspot} 3s cubic-bezier(.4,0,1,1) infinite;
    transition: all .3s ease-out 0s;
    z-index: -1;
`;

export const Circle2 = styled.span`
    position: absolute;
    top: -30%;
    right: -25%;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    background-color: var(--tp-common-white);
    animation: ${tp_hutspot2} 3s cubic-bezier(.4,0,1,1) infinite;
    animation-delay: 0s;
    transition: all .3s ease-out 0s;
    z-index: -1;
`;
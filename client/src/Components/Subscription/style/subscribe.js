import styled from 'styled-components';
import BgImage from '../../../Image/subscribeBg.jpg'


export const SubscribeArea = styled.div`
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url(${BgImage});
`;

export const Containers = styled.div`
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }

    @media (min-width: 1400px) {
        max-width: 1320px;
    }

    @media (max-width: 767px){
        max-width: 100%;
    }
`;

export const CtaInner = styled.div`
    padding: 60px 70px;
    background-color: var(--tp-common-white);

    @media screen and (max-width: 640px){
        padding: 30px;
        br{
            display: none;
        }
    }
`;

export const Row = styled.div`
    align-self: center;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
`;

export const SuscribeCol = styled.div`
flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 992px) {
        flex: 0 0 auto;
        width: 50%;
    }

    @media (min-width: 1200px) {
        flex: 0 0 auto;
        width: 50%;
    }
`;

export const SubscribeTitle = styled.h3`
        font-family: var(--tp-ff-roboto);
    font-size: 34px;
    line-height: 1.18;
    margin-bottom: 0;
        color: var(--tp-heading-primary);
    margin-top: 0;
    font-weight: var(--tp-fw-bold);

    @media screen and (max-width: 640px){
        margin-bottom: 20px;
    }
`;

export const Form = styled.form`

`;

export const CtaInput = styled.div`
        position: relative;
`;

export const CtaInputField = styled.input`
        height: 64px;
    background: #fff;
    border: 1px solid var(--tp-common-black);
    font-size: 15px;
    font-family: var(--tp-ff-roboto);
    padding-right: 170px;
    color: var(--tp-common-black);
    padding-left: 29px;
        width: 100%;
    line-height: 54px;
        outline: none;
        transition: all .3s ease-out 0s;

        @media (max-width: 550px){
            padding-right: 29px;
        }
`;

export const CTAButton = styled.button`
        position: absolute;
    top: 10px;
    right: 10px;
    font-family: var(--tp-ff-roboto);
    font-weight: 500;
    font-size: 16px;
    color: var(--tp-common-white);
    background-color: var(--tp-common-black);
    padding: 10px 42px;
        cursor: pointer;
            display: inline-block;
                z-index: 1;
    overflow: hidden;
    letter-spacing: -.02em;
    height: 46px;
    transition: all .3s ease-out 0s;

    &:hover{
            background-color: var(--tp-theme-1);
    color: var(--tp-common-white);
    }

    @media (max-width: 550px){
        position: static;
        margin-top: 10px;
        width: 100%;
    }
`;
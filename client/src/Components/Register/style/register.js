import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginArea = styled.section`
    padding-top: 110px;
    padding-bottom: 110px;
`;

export const Container = styled.div`
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

export const LoginInner = styled.div`
        position: relative;
        z-index: 1;
`;

export const LoginShape = styled.div`

`;

export const Shape1 = styled.img`
    position: absolute;
    right: 14%;
    bottom: 32%;
    z-index: -1;
`;

export const Shape2 = styled.img`
        position: absolute;
    right: -1%;
    bottom: 14%;
    z-index: -1;
`;

export const Shape3 = styled.img`
    position: absolute;
    left: 3%;
    top: 35%;
    z-index: -1;
`;

export const Shape4 = styled.img`
    position: absolute;
    left: 18%;
    bottom: 10%;
    z-index: -1;
`;

export const Shape5 = styled.img`
    position: absolute;
    right: 20%;
    top: 43%;
    z-index: -1;
`;

export const Shape6 = styled.img`
        position: absolute;
    right: 22%;
    top: 27%;
    z-index: -1;
`;

export const Row = styled.div`
        --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
    justify-content: center 
`;

export const LoginCol = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 768px){
            flex: 0 0 auto;
        width: 83.33333333%;
    }

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 66.66666667%;
    }

    @media (min-width: 992px){
       flex: 0 0 auto;
        width: 50%;
    }
`;

export const LoginWrap = styled.div`
    padding: 50px 85px 55px;
    background: var(--tp-common-white);
    box-shadow: 0 30px 60px rgba(3, 4, 28, .1);
`;

export const LoginTop = styled.div`
    margin-bottom: 30px;
    text-align: center;
`;

export const TopHeading = styled.h3`
        font-size: 34px;
    letter-spacing: -.04em;
    margin-bottom: 6px;
`;

export const TopDescribe = styled.p`
        font-size: 16px;
`;


export const LoginForm = styled.div`
    position: relative;
`;

export const Form = styled.form`

`;

export const LoginInputWrap = styled.div`
    margin-bottom: 14px;
`;

export const LoginInputItem = styled.div`
    position: relative;   

    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

export const LoginInput = styled.div`
    position: relative;
`;

export const LoginInputEye = styled.div`
        position: absolute;
    top: 50%;
    right: 22px;
    transform: translateY(calc(-50% - 3px));
`;

export const Input = styled.input`
    background: #fff;
    border: 1px solid #eaeaef;
    padding-left: 55px;
    padding-right: 50px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: var(--tp-common-black);
    width: 100%;
    outline: none;
transition: all .3s ease-out 0s;
    &:focus{
            border-color: var(--tp-theme-1);
    }
`;

export const InputIconWrap = styled.span`
    position: absolute;
    top: 50%;
    left: 27px;
    transform: translateY(calc(-50% - 3px));
`;

export const InputIcon = styled.svg`
    vertical-align: middle;
`;

export const LoginOption = styled.div`
    margin-bottom: 25px;
    justify-content: space-between;
    @media (min-width: 576px){
        display: flex;
    }
`;

export const LoginRemember = styled.div`

`;

export const LoginRemInput = styled.input`
    display: none;

    &[type=checkbox]:checked~label:before{
        transform: scale(1);
    }

    &[type=checkbox]:checked~label:after{
    background-color: transparent;
    border-color: var(--tp-theme-1);
    }
`;

export const LoginInputLabel = styled.label`
    font-size: 14px;
    position: relative;
    padding-left: 30px;
    display: inline-block;
    line-height: 26px;    
    cursor: pointer;

    &::before{
        width: 14px;
        height: 14px;
        background-color: var(--tp-theme-1);
        left: 3px;
        top: 5px;
        right: 3px;
        bottom: 3px;
        transform: scale(0);
            border: 1px solid #eaeaef;
    transition: all .2s ease-out 0s;
        position: absolute;
    content: "";
    }

    &::after{
    position: absolute;
    content: "";
    left: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    background-color: var(--tp-common-white);
    border: 1px solid #eaeaef;
    transition: all .2s ease-out 0s;
    }
`;

export const LoginForgot = styled.div`

`;

export const LoginLink = styled(Link)`
     font-size: 14px;
    color: var(--tp-common-black);
    text-transform: capitalize;   
`;

export const LoginBtn = styled.div`
  margin-bottom: 18px;  
`; 

export const LoginButton = styled.button`
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: var(--tp-common-white);
    background: var(--tp-theme-1);
    text-align: center;
    font-family: var(--tp-ff-space);
    padding: 10px 30px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    letter-spacing: -.02em;
 font-size: 18px;
padding: 17px 30px;
    width: 100%;
`;


export const RegisterSec = styled.div`
    text-align: center;
`;

export const RegisterPara = styled.p`   
        font-size: 14px;
    color: #525258;
    margin-bottom: 0;
`;

export const RegisterParaLink = styled(Link)`
     color: var(--tp-theme-1);
    font-weight: 500;   
`;
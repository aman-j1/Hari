import styled, { keyframes } from "styled-components";
import { Link as routerLink } from "react-router-dom";
const fadeInDown = keyframes`
    0%{
        transform: translateY(-100%);
    }

    100%{
        transform: translateY(0);
    }
`;



export const Header = styled.header`
    &.headerSticky{
            position: fixed !important;
    left: 0;
    margin: auto;
    top: 0;
    width: 100%;
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, .07);
    z-index: 99;
    animation: ${fadeInDown} .5s ease-in-out 0s 1 normal none running;
    box-shadow: 0 4px 10px rgba(3, 4, 28, .1);
    background: var(--tp-common-white);
    }
`;

export const HeaderArea = styled.div`
`;

export const HeaderSticky = styled.div`
        padding-left: 185px;
    padding-right: 185px;
        border-bottom: 1px solid #e2e2e2;
            background-color: var(--tp-grey-17);
            
`;

export const ContainerFluid = styled.div`
       --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-right: auto;
    margin-left: auto; 
`;

export const MegaMenuWrap = styled.div`
    position: relative;
`;

export const Row = styled.div`
        --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
    align-items: center;
`;

export const Logo = styled.div`
flex: 0 0 auto;
    width: 66.66666667%;
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
   @media(min-width: 576px){
            flex: 0 0 auto;
        width: 41.66666667%;
   }
        @media(min-width: 768px){
                    flex: 0 0 auto;
        width: 33.33333333%;
   }

    @media(min-width: 992px){
        flex: 0 0 auto;
        width: 33.33333333%;
   }
        @media(min-width: 1200px){
       flex: 0 0 auto;
        width: 16.66666667%;
   }
    @media(min-width: 1400px){
        flex: 0 0 auto;
        width: 8.33333333%;
   }
`;

export const Link = styled(routerLink)`

`

export const Image = styled.img`

`;

export const MenuSection = styled.div`
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
        display: none

    @media (min-width: 1200px){
        flex: 0 0 auto;
        width: 58.33333333%;
        display: block;
    }

    @media (min-width: 1400px){
        flex: 0 0 auto;
        width: 50%;
    }
`;

export const MainMenu = styled.div`
    padding-left: 45px;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
        margin-right: 30px;
            position: relative;
    list-style: none;
    display: inline-block;
        transition: all .3s ease-out 0s;

        &.has-dropdown:hover ul {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const MenuLink = styled(routerLink)`
        color: var(--tp-text-1);
            font-size: 15px;
    padding: 25px 0;
        font-family: var(--tp-ff-space);
            text-align: left;
    font-weight: 500;
        display: inline-block;
`;

export const SubMenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    transform-origin: top center;
    padding: 25px 0 5px;
    background: var(--tp-common-white);
    transform: scaleY(0);
    -ms-box-shadow: 0 20px 30px rgba(3,4,28,.1);
    -o-box-shadow: 0 20px 30px rgba(3,4,28,.1);
    box-shadow: 0 20px 30px rgba(3, 4, 28, .1);
        transition: all .3s ease-out 0s;
`;

export const SubList = styled.li`
        display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    transform: translateY(-10px);
        position: relative;
    list-style: none;
        transition: all .3s ease-out 0s;

    &:hover > a{
        color: var(--tp-theme-1);
        padding-left: 43px;      
    }

    &:hover a::before{
        width: 12px;
    }
`;

export const SubMenuLink = styled(routerLink)`
 position: relative;
    z-index: 11; 
    color: var(--tp-text-1);
    font-weight: 400;
    font-size: 14px;
    padding: 0 25px 1px;
    width: 100%;   
    text-align: left;
  display: inline-block;  
  line-height: 1.86;
  font-family: var(--tp-ff-space);

        transition: all .3s ease-out 0s;
  &::before{
    position: absolute;
    content: "";
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 1px;
    background-color: var(--tp-theme-1);
        transition: all .3s ease-out 0s;
  }
`

export const RightSection = styled.div`
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
        flex: 0 0 auto;
    width: 33.33333333%;

    @media (min-width: 576px) {
        flex: 0 0 auto;
        width: 58.33333333%;
    }

    @media (min-width: 768px) {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
    @media (min-width: 992px) {
    flex: 0 0 auto;
        width: 66.66666667%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 auto;
        width: 25%;
    }

    @media (min-width: 1400px) {
        flex: 0 0 auto;
        width: 41.66666667%;
    }
`;


export const BottomRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 30px;
`;

export const HeaderSearch = styled.div`
    position: relative;
`;

export const Form = styled.div`

`;

export const SearchInput = styled.div`
    display: none;

    @media (min-width: 1200px){
        display: block;
    }
`;

export const Input = styled.input`
    width: 320px;
    height: 46px;
    background-color: var(--tp-common-white);
    box-shadow: 0 1px 2px rgba(3, 4, 28, .1);
    border-radius: 30px;
    border: 0;
    outline: 0;
    padding: 0 25px;  
    color: var(--tp-common-black);
`;

export const Button = styled.button`
        position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
`;

export const Actions = styled.div`
    display: none;
    margin-left: 42px;

    @media(min-width: 768px){
        display: block;
    }
`;

export const ActionList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items:center;
`;

export const ActionItem = styled.li`
    list-style: none;
    display: inline-block;
    margin-right: 19px;
    transition: all .3s ease-out 0s;

    &.loginArea:hover .logout{
        display: block!important;
    }

    @media(min-width: 1400px){
        &.d-none{
            display: none;
        }
    }
`;

export const ActionLink = styled(routerLink)`
    font-size: 18px;
    display: inline-block;
    position: relative;
`;

export const ActionButton = styled.button`
    font-size: 18px;
    display: inline-block;
    position: relative;
    cursor: pointer;
`;

export const ActionIcon = styled.svg`
    transform: translateY(-2px);
`;

export const Count = styled.span`
        position: absolute;
    top: -6px;
    right: -12px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    color: var(--tp-common-white);
    background-color: var(--tp-theme-1);
    width: 23px;
    height: 23px;
    line-height: 17px;
    border: 3px solid #f0f2ee;
    text-align: center;
    border-radius: 50%;
        border-color: var(--tp-common-white);
`;


// Cart CSS

export const CartMini = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 360px;
    height: 100%;
    transform: translateX(calc(100% + 80px));
    background: var(--tp-common-white) none repeat scroll 0 0;
    transition: transform .45s ease-in-out, opacity .45s ease-in-out;
    z-index: 999;
    overflow-y: scroll;
    overscroll-behavior-y: contain;
    scrollbar-width: none;

    &.opened{
        transform: translateX(0);
    }
`;

export const CartMiniWrap = styled.div`
    position: relative;
    min-height: 100%;
    justify-content: space-between;
    flex-direction: column;
    display: flex;
`;

export const CartTopWrap = styled.div`

`;

export const CartTop = styled.div`
    position: relative;
`;

export const CartTitle = styled.div`
        padding: 20px;
    border-bottom: 1px solid var(--tp-border-5);
    box-shadow: 0 0 10px 0 hsla(0, 0%, 51%, .2);
`;

export const CartTitleH4 = styled.h4`
        font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0;
`;

export const CartClose = styled.div`
        position: absolute;
    top: 10px;
    right: 10px;
`;

export const CartCloseButton = styled.button`
    cursor: pointer;
        background: transparent;
    color: var(--tp-common-black);
    font-size: 35px;
`;

export const CartEmpty = styled.div`
        margin-top: 150px;
        text-align: center 
`;

export const CartEmptyImage = styled.img`
        color: transparent;
        transition: all .3s ease-out 0s;
        vertical-align: middle;
    margin-bottom: 30px;
`;

export const CartText = styled.div`
    font-size: 16px;
    color: var(--tp-common-black);
    margin-bottom: 15px;
        line-height: 26px;
        font-weight: var(--tp-fw-regular);
        font-family: var(--tp-ff-p);
`;

export const CartLink = styled(routerLink)`
        background-color: var(--tp-grey-1);
    font-size: 15px;
    text-transform: capitalize;
    color: var(--tp-common-black);
    padding: 10px 30px;
    text-align: center;
    font-family: var(--tp-ff-space);
        position: relative;
    z-index: 1;
    overflow: hidden;
    letter-spacing: -.02em;
    font-weight: 700;
    display: inline-block;
    transition: all 0.3s ease;

    &:hover{
            background-color: var(--tp-common-black);
    color: var(--tp-common-white);
    }
`;

export const CartOverlay = styled.div`
        background-color: var(--tp-common-black);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0;
    opacity: 0;
    visibility: hidden;

    &.opened{
        opacity: .7;
    visibility: visible;
    }
`;

export const CartWidget = styled.div`
        height: 100%;
`;

export const CartWidgetItem = styled.div`
        position: relative;
    display: flex;
    padding: 20px 35px 20px 20px;
    border-bottom: 1px solid hsla(0, 0%, 51%, .2);
    transition: background-color .3s;
`;

export const CartThumb = styled.div`
        margin-right: 15px;
`;

export const CartThumbImg = styled.img`
        width: 70px;
    height: 90px;
        transition: all .3s ease-out 0s;
        vertical-align: middle;
            color: transparent;
`;

export const CartContent = styled.div`

`;

export const CartConTitle = styled.h5`
        font-size: 15px;
    margin-bottom: 12px;
    font-weight: 500;
        line-height: 1.2;
            font-family: var(--tp-ff-heading);
    color: var(--tp-heading-primary);
    margin-top: 0;
    transition: all .3s ease-out 0s;

    &>a:hover{
        color: var(--tp-theme-1);
    }
`;

export const CartPriceWrapper = styled.div`

`;

export const CartPrice = styled.span`
font-size: 14px;
    font-weight: 500;
    color: var(--tp-theme-1);
`;

export const CartQuantity = styled.span`
    font-size: 12px;
    font-weight: 500;
`;

export const RemoveBtn = styled.button`
        position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: var(--tp-common-black);
    font-size: 12px;
    cursor: pointer;
`;


export const CartCheckout = styled.div`
        padding: 20px 20px 85px;
    width: 100%;
    background: var(--tp-common-white);
    border-top: 2px solid var(--tp-border-5)
`;

export const CartCheckoutTitle = styled.div`
    margin-bottom: 30px;
`;

export const CartCheckoutTitleH4 = styled.h4`
        font-size: 18px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 0;

    & + span{
        float: right;
    font-size: 20px;
    font-weight: 600;
    color: var(--tp-theme-1);
    }
`; 

export const VeiwCart = styled(routerLink)`
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
        width: 100%;
        margin-bottom: 10px;
        background-color: var(--tp-grey-1);
    font-size: 15px;
    text-transform: capitalize;
    color: var(--tp-common-black);
    padding: 10px 30px;
    transition: all 0.3s ease;

    &:hover {
    background-color: var(--tp-common-black);
    color: var(--tp-common-white);
    }
`;


export const CheckputBtn = styled(routerLink)`
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: var(--tp-common-black);
    font-family: var(--tp-ff-space);
    padding: 6px 18px;
    border: 1px solid var(--tp-border-5);
    text-align: center;
        padding: 10px 30px;
    font-size: 15px;
    text-transform: capitalize;
        width: 100%;
            cursor: pointer;
            transition: all 0.3s ease;

    &:hover {
    background-color: var(--tp-common-black);
    color: var(--tp-common-white);
    }
`;
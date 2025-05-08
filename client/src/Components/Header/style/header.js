import styled, { keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const fadeInDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Header = styled.header`
  &.headerSticky {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    margin: auto;
    background: var(--tp-common-white);
    box-shadow: 0 4px 10px rgba(3, 4, 28, 0.1);
    animation: ${fadeInDown} 0.5s ease-in-out;
  }
`;

export const HeaderArea = styled.div``;

export const HeaderSticky = styled.div`
  padding: 15px 185px;
  border-bottom: 1px solid #e2e2e2;
  background-color: var(--tp-grey-17);

  @media (max-width: 1800px) {
    padding: 15px 40px;
  }

   @media (max-width: 991px) {
    padding: 15px 0px;
  }
`;

export const ContainerFluid = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding: 0 calc(var(--bs-gutter-x) * 0.5);
  margin: 0 auto;
`;

export const MegaMenuWrap = styled.div`
  position: relative;
`;

export const Row = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: calc(-1 * var(--bs-gutter-y)) calc(-0.5 * var(--bs-gutter-x));
`;

export const Logo = styled.div`
  flex-shrink: 0;
  padding: 0 calc(var(--bs-gutter-x) * 0.5);
  width: 30%;

  @media (min-width: 576px) {
    width: 41.666667%;
  }

  @media (min-width: 768px) {
    width: 33.333333%;
  }

  @media (min-width: 992px) {
    width: 33.333333%;
  }

  @media (min-width: 1200px) {
    width: 16.666667%;
  }

  @media (min-width: 1400px) {
    width: 8.333333%;
  }
`;

export const Link = styled(RouterLink)``;

export const Image = styled.img``;

export const MenuSection = styled.div`
  display: none;
  flex-shrink: 0;
  padding: 0 calc(var(--bs-gutter-x) * 0.5);
  width: 100%;

  @media (min-width: 1200px) {
    display: block;
    width: 58.333333%;
  }

  @media (min-width: 1400px) {
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
  list-style: none;
  display: inline-block;
  margin-right: 30px;
  position: relative;
  transition: all 0.3s ease-out;

  &.has-dropdown:hover ul {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const MenuLink = styled(RouterLink)`
  font-family: var(--tp-ff-space);
  font-weight: 500;
  font-size: 15px;
  color: var(--tp-text-1);
  padding: 25px 0;
  text-align: left;
  display: inline-block;
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: var(--tp-common-white);
  box-shadow: 0 20px 30px rgba(3, 4, 28, 0.1);
  visibility: hidden;
  opacity: 0;
  transform-origin: top center;
  transform: scaleY(0);
  z-index: 99;
  padding: 25px 0 5px;
  transition: all 0.3s ease-out;
`;

export const SubList = styled.li`
  list-style: none;
  transform: translateY(-10px);
  transition: all 0.3s ease-out;

  &:hover > a {
    color: var(--tp-theme-1);
    padding-left: 43px;
  }

  &:hover a::before {
    width: 12px;
  }
`;

export const SubMenuLink = styled(RouterLink)`
  position: relative;
  z-index: 11;
  font-family: var(--tp-ff-space);
  font-size: 14px;
  color: var(--tp-text-1);
  font-weight: 400;
  padding: 0 25px 1px;
  display: inline-block;
  line-height: 1.86;
  width: 100%;
  transition: all 0.3s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    width: 0;
    height: 1px;
    background-color: var(--tp-theme-1);
    transition: all 0.3s ease-out;
  }
`;

export const RightSection = styled.div`
  flex-shrink: 0;
  padding: 0 calc(var(--bs-gutter-x) * 0.5);
  width: 70%;

  @media (min-width: 576px) {
    width: 58.333333%;
  }

  @media (min-width: 768px) {
    width: 66.666667%;
  }

  @media (min-width: 992px) {
    width: 66.666667%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

  @media (min-width: 1400px) {
    width: 41.666667%;
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

export const Form = styled.div``;

export const SearchInput = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const Input = styled.input`
  width: 320px;
  height: 46px;
  background-color: var(--tp-common-white);
  box-shadow: 0 1px 2px rgba(3, 4, 28, 0.1);
  border-radius: 30px;
  padding: 0 25px;
  border: none;
  outline: none;
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
  margin-left: 42px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ActionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const ActionItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 19px;
  transition: all 0.3s ease-out;

  &.loginArea:hover .logout {
    display: block !important;
  }

  @media (min-width: 1400px) {
    &.d-none {
      display: none;
    }
  }
`;

export const ActionLink = styled(RouterLink)`
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
  text-align: center;
  border: 3px solid var(--tp-common-white);
  border-radius: 50%;
`;

// Cart Components

export const CartMini = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: var(--tp-common-white);
  transform: translateX(calc(100% + 80px));
  transition: transform 0.45s ease-in-out, opacity 0.45s ease-in-out;
  z-index: 999;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scrollbar-width: none;

  &.opened {
    transform: translateX(0);
  }
`;

export const CartMiniWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  position: relative;
`;

export const CartTopWrap = styled.div``;

export const CartTop = styled.div`
  position: relative;
`;

export const CartTitle = styled.div`
  padding: 20px;
  border-bottom: 1px solid var(--tp-border-5);
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.2);
`;

export const CartTitleH4 = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;

export const CartClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CartCloseButton = styled.button`
  background: transparent;
  color: var(--tp-common-black);
  font-size: 35px;
  cursor: pointer;
`;

export const CartEmpty = styled.div`
  margin-top: 150px;
  text-align: center;
`;

export const CartEmptyImage = styled.img`
  margin-bottom: 30px;
  vertical-align: middle;
  transition: all 0.3s ease-out;
`;

export const CartText = styled.div`
  font-size: 16px;
  color: var(--tp-common-black);
  line-height: 26px;
  margin-bottom: 15px;
  font-weight: var(--tp-fw-regular);
  font-family: var(--tp-ff-p);
`;

export const CartLink = styled(RouterLink)`
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
  font-family: var(--tp-ff-space);
  background-color: var(--tp-grey-1);
  color: var(--tp-common-black);
  padding: 10px 30px;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  z-index: 1;
  position: relative;

  &:hover {
    background-color: var(--tp-common-black);
    color: var(--tp-common-white);
  }
`;

export const CartOverlay = styled.div`
  background-color: var(--tp-common-black);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  z-index: 99;

  &.opened {
    opacity: 0.7;
    visibility: visible;
  }
`;

export const CartWidget = styled.div`
  height: 100%;
`;

export const CartWidgetItem = styled.div`
  display: flex;
  padding: 20px 35px 20px 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  position: relative;
  transition: background-color 0.3s;
`;

export const CartThumb = styled.div`
  margin-right: 15px;
`;

export const CartThumbImg = styled.img`
  width: 70px;
  height: 90px;
  vertical-align: middle;
  transition: all 0.3s ease-out;
`;

export const CartContent = styled.div``;

export const CartConTitle = styled.h5`
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 12px;
  line-height: 1.2;
  color: var(--tp-heading-primary);
  font-family: var(--tp-ff-heading);
  transition: all 0.3s ease-out;

  > a:hover {
    color: var(--tp-theme-1);
  }
`;

export const CartPriceWrapper = styled.div``;

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
  font-size: 12px;
  color: var(--tp-common-black);
  cursor: pointer;
`;

export const CartCheckout = styled.div`
  padding: 20px 20px 85px;
  width: 100%;
  background: var(--tp-common-white);
  border-top: 2px solid var(--tp-border-5);
`;

export const CartCheckoutTitle = styled.div`
  margin-bottom: 30px;
`;

export const CartCheckoutTitleH4 = styled.h4`
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  margin: 0;

  & + span {
    float: right;
    font-size: 20px;
    font-weight: 600;
    color: var(--tp-theme-1);
  }
`;

export const VeiwCart = styled(RouterLink)`
  display: inline-block;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
  font-family: var(--tp-ff-space);
  background-color: var(--tp-grey-1);
  color: var(--tp-common-black);
  padding: 10px 30px;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: var(--tp-common-black);
    color: var(--tp-common-white);
  }
`;

export const CheckputBtn = styled(RouterLink)`
  display: inline-block;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
  font-family: var(--tp-ff-space);
  padding: 10px 30px;
  border: 1px solid var(--tp-border-5);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--tp-common-black);
    color: var(--tp-common-white);
  }
`;

export const Hamburger = styled.div`
  width: 24px;
  height: auto;
  position: relative;
  cursor: pointer;
  

  & span{
    width: 100%;
    height: 2.5px;
    background: #000;
    display: block;

    &:first-child{
      margin-top: 0;
      margin-bottom: 4px;
    }

    &:last-child{
      margin-top: 4px;
    }
  }

  @media(min-width: 1200px){
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0 0 0/40%);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.25s ease;

  &.opened{
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
`;

export const HeaderMobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: -200%;
  width: 400px;
  height: 100%;
  background-color: #fff;
  z-index: 100;
  padding: 40px 20px 20px;
  transition: right 0.4s ease;

  &.opened{
    right: 0;
  }

  & > .closebtn {
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
}

@media (max-width: 400px){
  width: 100%;
}
`;
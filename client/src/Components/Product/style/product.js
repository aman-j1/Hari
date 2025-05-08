import styled from 'styled-components';

export const ProductSection = styled.div`
  padding-bottom: 20px;
  padding-top: 100px;

  @media (max-width: 767px){
    padding-top: 10px;
  }
`;

export const Containers = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
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

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
`;

export const ProductTab = styled.div``;

export const TopCol = styled.div`
  flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 768px){
      flex: 0 0 auto;
        width: 50%;
    }

    @media (min-width: 992px){
      flex: 0 0 auto;
      width: 50%;
    }

    @media (min-width: 1200px){
      flex: 0 0 auto;
      width: 50%;
    }
`;

export const SectionTitle = styled.div`
      position: relative;
    z-index: 1;
        margin-bottom: 35px;
`;

export const Title = styled.h3`
      font-family: var(--tp-ff-roboto);
    font-size: 30px;
    line-height: 1;
    position: relative;
    padding-left: 16px;

    &::after{
      position: absolute;
    content: "";
    left: 0px;
    top: 0px;
    height: 100%;
    width: 3px;
    background-color: var(--tp-theme-1);
    }
`;

export const ProductTabber = styled.div`
      margin-bottom: 35px;
`;

export const TabberNav = styled.ul`
  --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: var(--bs-secondary-color);
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    --bs-nav-tabs-border-width: var(--bs-border-width);
    --bs-nav-tabs-border-color: var(--bs-border-color);
    --bs-nav-tabs-border-radius: var(--bs-border-radius);
    --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
    --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
    --bs-nav-tabs-link-active-bg: var(--bs-body-bg);
    --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
    border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);

        padding: 0px;
    margin: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;

    @media screen and (min-width: 768px){
      justify-content: flex-end
    }
`;

export const TabberList = styled.li`
      margin-right: 25px;

      &:last-child{
        margin: 0;
      }
`;

export const TabberButton = styled.button`
  font-weight: 500;
    font-size: 18px;
    color: var(--tp-text-1);
    padding-left: 5px;
    padding-right: 5px;
    position: relative;
        color: var(--tp-text-1);
    border-top-left-radius: var(--bs-nav-tabs-border-radius);
    border-top-right-radius: var(--bs-nav-tabs-border-radius);
        text-transform: capitalize,
        cursor: pointer;
            text-decoration: none;
    background: none;
    display: block;
    cursor: pointer;

    &.active{
      color: var(--tp-theme-1);
    }

    &::after{
      position: absolute;
    content: "";
    bottom: -5px;
    left: auto;
    right: 0px;
    width: 0px;
    height: 2px;
    background-color: var(--tp-theme-1);
    }

    &.active:after{
          width: 100%;
    left: 0;
    right: auto;
    }
`;

export const ProductItemWrap = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 33.333%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

  &.relatedProductWrap{
    width: 100%  !important;
  }
`;

export const ProductThumb = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ProImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ProductActions = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProductToolTip = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 90%;
  font-weight: 500;
  font-size: 12px;
  color: var(--tp-common-white);
  background-color: var(--tp-common-black);
  padding: 4px 8px;
  margin-right: 8px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
  z-index: 1;
`;

export const ActionButton = styled.button`
  width: 38px;
  height: 38px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(3, 4, 28, 0.12);
  text-align: center;
  position: relative;
  transform: translateX(100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-out;
  border: none;
  cursor: pointer;

    &:hover{
        background-color: var(--tp-theme-1);
    color: var(--tp-common-white);
    }

  &:hover ${ProductToolTip} {
    visibility: visible;
    opacity: 1;
    right: 100%;
  }
`;



export const ProductAdd = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const ProductAddButton = styled.button`
  font-weight: 600;
  font-size: 15px;
  color: var(--tp-common-white);
  background-color: var(--tp-common-black);
  padding: 7px 25px;
  text-align: center;
  border: none;
  cursor: pointer;
  width: 100%;
    transition: all 0.3s ease;

  &:hover{
        color: var(--tp-common-white);
    background-color: var(--tp-theme-1);
  }
`;

export const ProductContent = styled.div`
  padding-top: 14px;
`;

export const ProductTitle = styled.h3`
  font-family: var(--tp-ff-inter);
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const ProductPricing = styled.div`
  font-weight: 500;
  font-size: 17px;
  color: var(--tp-text-1);
`;

export const ProductItem = styled.div`
  margin-bottom: 50px;
  position: relative;
  transition: all 0.3s ease-out;

  &:hover ${ProductAdd} {
    opacity: 1;
    visibility: visible;
    bottom: 0;
  }

  &:hover ${ActionButton} {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  &:hover ${ActionButton}:first-child {
    transition-delay: 0s;
  }

  &:hover ${ActionButton}:last-child {
    transition-delay: 0.1s;
  }

  &:hover ${ProImage}{
    transform: scale(1.1);
  }
`;


export const ProductBadge = styled.div`
    position: absolute;
    left: 0px;
    top: 20px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column
`;

export const Hasnew = styled.span`
      display: inline-block;
    font-size: 13px;
    line-height: 1;
    color: var(--tp-common-white);
    background-color: var(--tp-theme-1);;
    margin-bottom: 5px;
    text-transform: capitalize;
    padding: 4px 10px;
`;

export const HasOffer = styled.span`
  display: inline-block;
    font-size: 13px;
    line-height: 1;
    color: var(--tp-common-white);
    background-color: var(--tp-common-black);
    margin-bottom: 5px;
    text-transform: capitalize;
    padding: 4px 10px;
`;
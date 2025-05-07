import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const BreadCrumbArea = styled.div`
    background-color: var(--tp-grey-1);
    padding-top: 100px;
    padding-bottom: 100px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
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
    align-self: center;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
    justify-content: center;
    text-align: center;
`;


export const BreadcrumCol = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
    position: relative;

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 83.33333333%;
    }

    @media (min-width: 1200px){
        flex: 0 0 auto;
        width: 66.66666667%;
    }

    @media (min-width: 1400px){
        flex: 0 0 auto;
        width: 66.66666667%;
    }
`;

export const BreadcrumbTitle = styled.h3`
        font-size: 70px;
    line-height: 1;
    letter-spacing: -.04em;
    color: var(--tp-common-black);
    margin-bottom: 10px;
    margin-top: 0;
    font-weight: var(--tp-fw-bold);
        font-family: var(--tp-ff-heading);
`;

export const BreadItem = styled.span`
font-family: var(--tp-ff-space);
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: var(--tp-common-black);
    display: inline-block;
`;


export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
      padding-top: 120px;
    padding-bottom: 110px;
    text-align: center;
`;

export const CartEmptyTitle = styled.h2`
    font-size: 22px;
    color: var(--tp-common-black);
    margin-bottom: 25px;
    line-height: 26px;
    font-weight: 400;
    margin-top: 30px;
`;

export const CartEmptyButton = styled(Link)`
  background-color: var(--tp-grey-1);
    font-size: 15px;
    text-transform: capitalize;
    color: var(--tp-common-black);
    padding: 10px 30px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    letter-spacing: -.02em;
        display: inline-block;
        font-weight: 700;
    text-align: center;
    font-family: var(--tp-ff-space);
    transition: all 0.3s ease;

    &:hover{
      background: #03041c;
      color: #fff;
    }
`;


export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 20px;
`;

export const ItemImage = styled.img`
      width: 140px;
    height: 160px;
    object-fit: cover;
    margin-right: 20px;
}
`;

export const ItemInfo = styled.div`
  flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ItemTitle = styled.h4`
    margin: 0 0 0.5rem;
    font-size: 19px;
    font-weight: 400;
`;

export const SideInfo = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
`;

export const Price = styled.p`
  font-weight: 400;
  font-size: 19px;
  line-height: 1;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
    padding: 8px 12px;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    font-size: 26px;
    border: 1px solid #ccc;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 25px;
  cursor: pointer;
`;

export const TotalSection = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CartTotalInner = styled.div`
    width: auto;
    display: inline-block;
    padding: 20px;
    min-width: 400px;
    text-align: left;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
`;

export const CardPriceBreak = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;
    border-bottom: 1px solid;
`;

export const CardPriceInner = styled.div`
    display: flex;
    width: auto;
    justify-content: space-between;
        margin-bottom: 5px;

    & strong{
      font-weight: 500;
    }

    & span{
      font-weight: 400;
    }
`;

export const CartTotalTitle = styled.h4`
    margin-bottom: 20px;
    font-size: 30px;
`;

export const CheckoutBtn = styled(Link)`
    background-color: var(--tp-grey-1);
    font-size: 15px;
    text-transform: capitalize;
    color: var(--tp-common-black);
    padding: 15px 30px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    letter-spacing: -.02em;
    display: inline-block;
    font-weight: 700;
    text-align: center;
    font-family: var(--tp-ff-space);
    transition: all 0.3s ease;
    margin-top: 20px;
    width: 100%;
    border-radius: 20px;

    &:hover{
      background: #03041c;
      color: #fff;
    }
`;
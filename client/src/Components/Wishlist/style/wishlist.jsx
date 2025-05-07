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
  max-width: 800px;
  margin: 40px auto;
  padding: 1rem;
`;

export const CartTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemTitle = styled.h4`
  margin: 0 0 0.5rem;
`;

export const Price = styled.p`
  font-weight: bold;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  padding: 6px 10px;
  background-color: #222;
  color: white;
  border: none;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const TotalSection = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`;
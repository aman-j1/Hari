import styled from 'styled-components';

export const BreadcrumArea = styled.div`
    padding-top: 75px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
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


export const BreadCol = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width:1400px){
        flex: 0 0 auto;
        width: 58.33333333%;
    }
`;

export const BreadcrumbContent = styled.div`
    position: relative;
    z-index: 1;
    padding-left: 24px;
    margin-bottom: 20px;
`;

export const BreadIcon = styled.span`
        position: absolute;
    left: 0;
    top: 4px;
        line-height: 19px;
            font-weight: 400;
    font-size: 14px;
    color: var(--tp-text-1);
    font-family: var(--tp-ff-roboto);
    display: inline-block;
`;


export const BreadcrumItem = styled.span`
        font-weight: 400;
    font-size: 14px;
    color: var(--tp-text-1);
    font-family: var(--tp-ff-roboto);
    display: inline-block;
    line-height: 19px;
`;

export const Breadcrumdvd = styled.span`
      font-weight: 400;
    font-size: 14px;
    color: var(--tp-text-1);
    font-family: var(--tp-ff-roboto);
    display: inline-block;
    line-height: 19px;
        transform: translateY(0);
    color: var(--tp-text-1);
    padding: 0 8px;
`;


export const ProductDetailArea = styled.div`
        padding-bottom: 115px;
`;

export const ProductImageCol = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 50%;
    }

     @media (min-width: 1200px){
        flex: 0 0 auto;
        width: 58.33333333%;
    }
`;

export const ProductContentCol = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 50%;
    }

     @media (min-width: 1200px){
        flex: 0 0 auto;
        width: 41.66666667%;
    }
`;

export const ProductThumbDetail = styled.div`
        margin-right: 70px
`;

export const ProductDetailThumb = styled.div`
        margin-bottom: 14px;
`;

export const ProductTitle = styled.h3`
    font-family: var(--tp-ff-roboto);
    font-weight: 500;
    font-size: 34px;
    margin-bottom: 5px;

    &.relatedTitle {
        font-family: var(--tp-ff-inter);
    font-weight: 400;
    font-size: 14px;
    }

    &.relatedTopTitle{
            font-family: var(--tp-ff-roboto);
    font-size: 30px;
    line-height: 1;
    position: relative;
    padding-left: 16px;
    color: var(--tp-heading-primary);
    margin-top: 0;
    font-weight: var(--tp-fw-bold);
        margin-bottom: 35px;
    }

    &.relatedTopTitle::after{
        position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: var(--tp-theme-1);
    }
`;

export const ProductDesc = styled.p`
    font-family: var(--tp-ff-roboto);
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 23px;
    margin-top: 20px;
    font-weight: var(--tp-fw-regular);
    color: var(--tp-text-body);
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

export const ProductPrice = styled.div`
        margin-bottom: 35px;
`;

export const Amount = styled.span`
        font-weight: 600;
    font-size: 24px;
    color: var(--tp-common-black);
    margin-left: 1px;
        font-family: var(--tp-ff-roboto);
    line-height: 1;

    &+span.offer{
        font-family: var(--tp-ff-roboto);
    line-height: 1;
        margin-left: 2px;
    font-weight: 700;
    font-size: 13px;
    color: var(--tp-common-white);
    background-color: var(--tp-theme-1);
    padding: 3px 9px;
    display: inline-block;
    transform: translateY(-4px);
    }
`;

export const ProductDetTab = styled.div`
    padding-bottom: 110px;
`;

export const ProductDetTabCol = styled.div`
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 1200px){
                flex: 0 0 auto;
        width: 100%;
    }
`;

export const ProductTabNav = styled.div`
    border-bottom: 1px solid #dadce0;
`;

export const ProductTabNavInner = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 576px){
        flex-wrap: nowrap;
    }
`;


export const NavItem = styled.div`
        color: var(--tp-common-black);
            position: relative;
    padding: 11px 14px;
    font-weight: 500;
    font-size: 16px;
    cursor: poointer;
`;

export const ProductTabContent = styled.div`
        padding-top: 95px;
`;

export const ProductTabInner = styled.div`
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 992px){
            flex: 0 0 auto;
        width: 100%;
    }
`;

export const ProductTabTitle = styled.h3`
    line-height: 1.2;
        margin-top: 0;
            font-family: var(--tp-ff-roboto);
    font-weight: 500;
    font-size: 34px;
    color: var(--tp-common-black-solid);
    margin-bottom: 10px;
`;

export const ProductTabDesc = styled.h3`
        font-family: var(--tp-ff-roboto);
    font-size: 18px;
    line-height: 1.67;
    color: var(--tp-text-1);
    margin-bottom: 25px;
`;

export const Stock = styled.div`
        margin-bottom: 13px;
`;

export const StockQuantity = styled.span`
    font-family: var(--tp-ff-inter);
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    color: var(--tp-theme-1);
    border: 1px solid rgba(245, 9, 99, .1);
    padding: 5px 18px;
`;

export const ProductQuantity = styled.div`
        margin-bottom: 40px;
`;

export const TpQuantity = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
        width: 148px;
    position: relative;
`;

export const TpCartMinus = styled.span`
        width: 45px;
    height: 44px;
    line-height: 44px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: var(--tp-common-black);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;

    &::after{
            position: absolute;
    content: "";
    width: 1px;
    height: 26px;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background-color: #dadce0;
    }
`;

export const TpCartInput = styled.input`
    color: var(--tp-common-black);
        width: 100%;
    line-height: 54px;
        height: 44px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #dadce0;
    background-color: var(--tp-common-white);
    padding: 0 45px;
`;

export const TpCartPlus = styled.span`
    width: 45px;
    height: 44px;
    line-height: 44px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: var(--tp-common-black);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    left: auto;
    right: 0;
    cursor: pointer;

    &::after{
            position: absolute;
    content: "";
    width: 1px;
    height: 26px;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background-color: #dadce0;
        left: 0;
    right: auto;
    }
`;

export const ProductSKU = styled.div`

    &>p{
            display: inline-block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
    color: var(--tp-common-black);
    font-family: var(--tp-ff-roboto);
    }

    &>span{
            font-size: 15px;
    line-height: 1;
    color: var(--tp-text-1)
    }
`;

export const Productategories = styled.div`
        margin-bottom: 15px;

        &>p{
            display: inline-block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
    color: var(--tp-common-black);
        }

        &>span{
            font-size: 15px;
    line-height: 1;
    color: var(--tp-text-1);
        }
`;

export const ProductTags = styled.div`
    margin-bottom: 15px;

    &>span{
            display: inline-block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
    color: var(--tp-common-black);
    margin-right: 3px;
    }

    &>a{
        font-size: 14px;
    line-height: 1;
    color: var(--tp-text-1);
    border: 1px solid #dadce0;
    padding: 4px 12px;
    margin-bottom: 6px;
    display: inline-block;
    transition: all 0.3s ease; 

        &:hover{
                background-color: var(--tp-theme-1);
    border-color: var(--tp-theme-1);
    color: var(--tp-common-white);
        }
    }
`;

export const ProductDetailsActions = styled.div`
        padding-bottom: 34px;
    border-bottom: 1px solid #dadce0;
    margin-bottom: 32px;
        align-items: center
            flex-wrap: wrap
                display: flex
`;
export const AddCart = styled.button`
        background-color: var(--tp-common-black);
    color: var(--tp-common-white);
    padding: 12px 45px;
        font-weight: 600;
    font-size: 15px;
        display: inline-block;
        text-align:center;
        cursor: pointer;
            margin-right: 6px;
            height: 50px;
            transition: all .3s ease-out 0s;

            &:hover{
                    color: var(--tp-common-white);
    background-color: var(--tp-theme-1);
    border-color: var(--tp-theme-1);
            }
`;

export const WishlistButton = styled.button`
        width: 50px;
    height: 50px;
    line-height: 48px;
    text-align: center;
    font-size: 18px;
    color: var(--tp-common-black);
        cursor: pointer;
            position: relative;
                margin-bottom: 6px;
    border: 1px solid #dadce0;

    &>span.tooltip{
     position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 90%;
    font-weight: 500;
    font-size: 12px;
    color: var(--tp-common-white);
    background-color: var(--tp-common-black);
    z-index: 1;
    display: inline-block;
    width: max-content;
    line-height: 1;
    padding: 4px 8px;
    margin-right: 8px;
    visibility: hidden;
    opacity: 0;
        top: auto;
    bottom: 90%;
    left: auto;
    right: auto;
    margin: auto auto 10px;
    transform: translate(-57%);
        transition: all .3s ease-out 0s;

        &::after{
                position: absolute;
    content: "";
        height: 8px;
    width: 8px;
    background-color: var(--tp-common-black);
        top: 100%;
    right: 50%;
    left: auto;
    transform: translate(50%, -50%) rotate(45deg);
        }
    }

    &:hover >span.tooltip{
        bottom: 100%;
    top: auto;
    right: auto;
        visibility: visible;
    opacity: 1;
    }

    &:hover{
            color: var(--tp-common-white);
    background-color: var(--tp-theme-1);
    border-color: var(--tp-theme-1);
    }
`;
import styled from 'styled-components';

export const BreadcrumArea = styled.div`
    padding-top: 15px;
    padding-bottom: 55px;
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

    .alignCenter {
        text-align: center;
    }
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


export const ShopArea = styled.section`
    padding-bottom: 60px;
`;

export const ShopTop = styled.div`
    margin-bottom: 50px;
        padding: 15px 20px 15px 30px;
    border: 1px solid rgba(3, 4, 28, .1);
`;

export const ShopCol = styled.div`
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 768px){
        flex: 0 0 auto;
        width: 41.66666667%;
    }

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 50%;
    }
`;

export const ShopFilterCol = styled.div`
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 768px){
        flex: 0 0 auto;
        width: 58.33333333%;
    }

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 50%;
    }
`;

export const ShopResult = styled.p`
    line-height: 26px;
        font-weight: var(--tp-fw-regular);
    color: var(--tp-text-body);
    font-family: var(--tp-ff-roboto);
    font-size: 16px;
    margin-bottom: 0;
`;

export const ShopSort = styled.div`
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    
    @media (min-width: 768px){
        justify-content: flex-end;
    }
`;

export const ShopSortItem = styled.div`

`;

export const ShopSortTab = styled.div`

`;

export const SortNav = styled.div`
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
        padding: 0;
    margin: 0;
    border: 0;
`;

export const NavLink = styled.button`
        font-size: 18px;
    color: #ababab;
    margin-right: 20px;
        color: var(--bs-nav-tabs-link-active-color);
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
        border-top-left-radius: var(--bs-nav-tabs-border-radius);
    border-top-right-radius: var(--bs-nav-tabs-border-radius);
    cursor: pointer;
    &.active{
        color: var(--tp-theme-1);
    }
`;

export const SortSelect = styled.div`
        height: 40px;
    line-height: 40px;
    border: 1px solid #e9e9f0;
    width: 230px;
    border-radius: 0;
    font-family: var(--tp-ff-roboto);
    font-weight: 400;
    font-size: 14px;
    color: var(--tp-text-1);
    padding: 0 20px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #fff;
    box-sizing: border-box;
    clear: both;
        position: relative;
    text-align: left !important;
    transition: all .2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    white-space: nowrap;
        outline: none;
            display: block;
    float: left;
        cursor: pointer;

`;

export const SortList = styled.ul`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(68, 68, 68, .11);
    box-sizing: border-box;
    margin-top: 4px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0;
    transform-origin: 50% 0;
    transform: scale(.75) translateY(-21px);
    transition: all .2s cubic-bezier(.5,0,0,1.25), opacity .15s ease-out;
    z-index: 9;
    
        width: 100%;
    margin-top: 0;
    border-radius: 0;
    padding: 12px 0;

    .open &{
        opacity: 1;
    pointer-events: auto;
    transform: scale(1) translateY(0);
    }
`;

export const SortListItem = styled.li`
        font-weight: 400;
    color: var(--tp-common-black);
        line-height: 30px;
    min-height: 30px;
        outline: none;
    padding-left: 18px;
    padding-right: 29px;
    text-align: left;
    transition: all .2s;
        transition: all .3s ease-out 0s;
`;


// Shop Main

export const ShopMain = styled.div`

`;

export const ShopFilter = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 25%;
    }
`;

export const ShopProductCol = styled.div`
        flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 992px){
        flex: 0 0 auto;
        width: 75%;
    }
`;

export const Sidebar = styled.div`
        margin-right: 30px;
    margin-bottom: 50px;
`;

export const CategoryFilter = styled.div`
        margin-bottom: 8px;
`;

export const CategoryItem = styled.button`
        padding: 0;
    width: 100%;
    text-align: left;
    background: #fff;
    position: relative;
    font-weight: 400;
    font-size: 18px;
    color: #232323;
    line-height: 26px;
    cursor: pointer;

    &.active{
        color: #f50963;
    }
`;

export const PaginationCol = styled.div`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);

    @media (min-width: 1400px){
                flex: 0 0 auto;
        width: 100%;
    }
`;

export const PagList = styled.ul`

`;

export const PagItem = styled.li`
    display: inline-block;
    margin-bottom: 20px;
        margin-right: 5px;
            transition: all .3s ease-out 0s;

`;

export const PagButton = styled.button`
        display: inline-block;
    font-family: var(--tp-ff-space);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    min-height: 44px;
    min-width: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(3, 4, 28, .06);
        cursor: pointer;    
border: 1px solid #eaeaef;
    line-height: 42px;
    box-shadow: none;
    margin-right: 5px;
    transition: all 0.3s ease;


    &:hover{
        background: var(--tp-theme-1);
        border-color:background: var(--tp-theme-1);
    border-color: var(--tp-theme-1);
    color: var(--tp-common-white);
    box-shadow: 0 1px 2px rgba(3, 4, 28, .1);
    }

    &.active{
                background: var(--tp-theme-1);
        border-color:background: var(--tp-theme-1);
    border-color: var(--tp-theme-1);
    color: var(--tp-common-white);
    box-shadow: 0 1px 2px rgba(3, 4, 28, .1);
            }

            &:disabled{
                display: none;
            }
`;

export const PagSpan = styled.span`
    display: inline-block;
    font-family: var(--tp-ff-space);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    min-height: 44px;
    min-width: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(3, 4, 28, .06);
        border: 1px solid #eaeaef;
    line-height: 42px;
    box-shadow: none;
        padding: 12px 19px;
    line-height: 1;
    display: inline-block;
`;
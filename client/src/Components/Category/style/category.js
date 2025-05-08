import styled from 'styled-components'

export const CategorySection = styled.div`
    padding: 80px 0;
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
    display: flex;
    justify-content: center;

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

export const CategoryCol = styled.div`
    width: 100%;
    padding:0 15px; 
    position: relative;
    text-align: center;
`;

export const CategoryImage = styled.img`
    width: 100%;
    height: 210px;
    object-fit:cover;

    & + p{
        font-size: 22px;
    margin-top: 20px;
    font-weight: 500;
    }
`;
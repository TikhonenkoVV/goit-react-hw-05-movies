import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;

    padding-left: ${props => props.theme.spacing.step * 5}px;
    padding-right: ${props => props.theme.spacing.step * 5}px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${props => props.theme.breakpoints.s}) {
        width: ${props => props.theme.breakpoints.s};
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: ${props => props.theme.breakpoints.m};
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        width: ${props => props.theme.breakpoints.l};
    }
`;

export const MainStyled = styled.main`
    padding: 20px 0;
`;

export const HomeTitle = styled.h1`
    margin-bottom: 20px;
    text-align: center;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.xl};
`;

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: ${props => props.theme.spacing.step * 5}px;
`;

export const GridItem = styled.li`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.accent};

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    overflow: hidden;
    cursor: zoom-in;

    &:hover,
    &:focus {
        box-shadow: 0px 2px 10px 2px #464545;
    }
    &:hover img,
    &:focus img {
        transform: scale(1.05);
    }
    &:hover .js-overlay,
    &:focus .js-overlay {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const BtnBack = styled;

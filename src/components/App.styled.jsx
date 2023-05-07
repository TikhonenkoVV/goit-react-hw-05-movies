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

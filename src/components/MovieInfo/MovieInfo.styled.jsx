import styled from '@emotion/styled';

export const MovieWrapper = styled.div`
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        display: flex;
    }
`;

export const Poster = styled.img`
    flex-shrink: 0;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        min-width: 30%;
        margin: 0;
    }
`;

export const MovieInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0 0 0;
    color: white;
    gap: 20px;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        padding: 0 0 0 20px;
    }
`;

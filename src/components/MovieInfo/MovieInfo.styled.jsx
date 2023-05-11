import styled from '@emotion/styled';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export const MovieWrapper = styled.div`
    padding: 30px;
    background-image: linear-gradient(
            90deg,
            rgba(64, 64, 64, 1) 3%,
            rgba(64, 64, 64, 0.87) 23%,
            rgba(64, 64, 64, 0.87) 77%,
            rgba(64, 64, 64, 1) 100%
        ),
        url(${props => IMAGES_BASE_URL + props.bgr});
    background-repeat: no-repeat;
    background-size: cover;
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

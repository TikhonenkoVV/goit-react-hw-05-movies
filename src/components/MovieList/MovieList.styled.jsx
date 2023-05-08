import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const MovieLink = styled(Link)`
    display: block;
    flex-grow: 1;
`;

export const CardOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    background-color: #000000e8;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    ${/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
        ? 'transform: translateY(0); opacity: 1;'
        : 'transform: translateY(100%); opacity: 0;'}
`;

export const MovieTitle = styled.h2`
    line-height: 1.5;
    text-align: center;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.medium};
`;

export const Description = styled.p`
    padding: 4px 10px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 12px;
    color: ${props => props.theme.colors.accent};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
`;

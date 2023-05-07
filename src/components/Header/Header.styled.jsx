import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import svg from '../../images/logo.svg';

export const HeaderStyled = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.colors.mainBackground};
    border-bottom: 1px solid #272d30;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`;

export const Logotype = styled(Link)`
    display: flex;
    width: 90px;
    height: 70px;
    background-image: url(${svg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    color: ${props => props.theme.colors.light};
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 700;
    text-transform: uppercase;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.white};
    }

    &.active {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.hover};
        pointer-events: none;
    }
`;

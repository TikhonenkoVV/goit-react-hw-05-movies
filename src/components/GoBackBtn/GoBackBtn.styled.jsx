import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBackButton = styled(Link)`
    color: ${({ theme }) => theme.colors.light};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    display: block;
    margin-bottom: 20px;
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailListStyled = styled.ul`
    display: flex;
    gap: 20px;
    padding: 20px 0;
`;

export const DetailsItem = styled.li`
    flex-basis: calc(15% - 10px);
`;

export const DetailsLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }
`;

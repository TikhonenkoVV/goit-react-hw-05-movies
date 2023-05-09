import styled from '@emotion/styled';

export const ReviewTitle = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
`;

export const ReviewList = styled.ul`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.accent};
`;

export const RevievItem = styled.li`
    color: ${({ theme }) => theme.colors.white};
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const RevieAutor = styled.h2`
    margin-bottom: 20px;
`;

export const RevieText = styled.p``;

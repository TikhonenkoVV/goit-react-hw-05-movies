import styled from '@emotion/styled';

export const Page404Styled = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
    & p {
        font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
    & img {
        margin: 0 auto;
    }
`;

import styled from '@emotion/styled';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: #00000080;
    transition: opacity 250ms, visibility 250ms;
    z-index: 100;
`;

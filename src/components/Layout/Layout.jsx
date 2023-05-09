import { MainStyled } from 'components/App.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <>
            <Header />
            <MainStyled>
                <Suspense>
                    <Outlet />
                </Suspense>
            </MainStyled>
        </>
    );
};

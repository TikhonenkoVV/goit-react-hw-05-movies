import { MainStyled } from 'components/App.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Header />
            <MainStyled>
                <Outlet />
            </MainStyled>
        </>
    );
};

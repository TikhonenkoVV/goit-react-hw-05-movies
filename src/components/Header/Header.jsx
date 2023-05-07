import {
    HeaderStyled,
    Logotype,
    Nav,
    NavLinkStyled,
    Wrapper,
} from './Header.styled';
import { Container } from 'components/App.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <Wrapper>
                    <Logotype to={'home'} />
                    <Nav>
                        <NavLinkStyled to={'home'}>Home</NavLinkStyled>
                        <NavLinkStyled to={'movies'}>Movies</NavLinkStyled>
                    </Nav>
                </Wrapper>
            </Container>
        </HeaderStyled>
    );
};

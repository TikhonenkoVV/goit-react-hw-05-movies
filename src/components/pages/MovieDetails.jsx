import { Container } from 'components/App.styled';
import { NavLink, Outlet } from 'react-router-dom';

const MovieDetails = () => {
    return (
        <Container>
            Movie
            <ul>
                <li>
                    <NavLink to={'cast'} />
                </li>
                <li>
                    <NavLink to={'review'} />
                </li>
            </ul>
            <Outlet />
        </Container>
    );
};

export default MovieDetails;

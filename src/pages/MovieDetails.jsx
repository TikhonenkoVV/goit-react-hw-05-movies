import { Container } from 'components/App.styled';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { NavLink, Outlet } from 'react-router-dom';

const MovieDetails = () => {
    return (
        <section>
            <Container>
                <MovieInfo />
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
        </section>
    );
};

export default MovieDetails;

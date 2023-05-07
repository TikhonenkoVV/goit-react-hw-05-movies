import { Container } from 'components/App.styled';
import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
    return (
        <Container>
            <div>Movies</div>
            <ul>
                <li>
                    <Link to={'cast'}>Cast</Link>
                </li>
                <li>
                    <Link to={'review'}>Review</Link>
                </li>
            </ul>
            <Outlet />
        </Container>
    );
};

export default Movies;

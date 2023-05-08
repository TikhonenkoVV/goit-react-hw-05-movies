import { Container } from 'components/App.styled';
import { DetailList } from 'components/DetailList/DetailList';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { gethMovieDetails } from 'services/api';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    const location = useLocation();
    const goBackLink = location?.state?.from || '/';

    useEffect(() => {
        setIsLoading(true);
        gethMovieDetails(movieId, '')
            .then(data => {
                setMovie(data);
            })
            .catch(err => {
                alert(err.massage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    return (
        <section>
            {isLoading && <Loader />}
            <Container>
                <GoBackBtn path={goBackLink}>Back to coutries</GoBackBtn>
                <MovieInfo {...movie} />
                <DetailList />
                <Outlet />
            </Container>
        </section>
    );
};

export default MovieDetails;

import { Container } from 'components/App.styled';
import { DetailList } from 'components/DetailList/DetailList';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Page404 } from 'components/Page404/Page404';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { gethMovieDetails } from 'services/api';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    const location = useLocation();
    const goBackLink = useRef(location?.state?.from ?? '/');

    useEffect(() => {
        setIsLoading(true);
        gethMovieDetails(movieId, '')
            .then(data => {
                setMovie(data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    return (
        <section>
            {isLoading && <Loader />}
            <Container>
                <GoBackBtn path={goBackLink}>Go back</GoBackBtn>
                {movie && (
                    <>
                        <MovieInfo {...movie} />
                        <DetailList state={{ from: location }} />
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </>
                )}
                {error && <Page404 />}
            </Container>
        </section>
    );
};

export default MovieDetails;

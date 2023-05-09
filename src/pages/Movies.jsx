import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Page404 } from 'components/Page404/Page404';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gethMoviesByName } from 'services/api';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [first, setFirst] = useState(true);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) return;
        setIsLoading(true);
        gethMoviesByName(query)
            .then(data => {
                setMovies(data.results);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
                setFirst(false);
            });
    }, [searchParams, error]);

    const onSubmit = query => {
        setSearchParams({ query });
    };

    return (
        <section>
            <Container>
                {isLoading && <Loader />}
                <SearchForm onSubmit={onSubmit} />
                {movies && <MovieList movies={movies} />}
                {!first && movies.length < 1 && <Page404 />}
            </Container>
        </section>
    );
};

export default Movies;

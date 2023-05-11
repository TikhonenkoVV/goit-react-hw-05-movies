import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Page404 } from 'components/Page404/Page404';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { gethMoviesByName } from 'services/api';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [first, setFirst] = useState(true);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = 1;

    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) return;
        setIsLoading(true);
        gethMoviesByName(query, page)
            .then(data => {
                setMovies(data.results);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
                setFirst(false);
            });
    }, [searchParams]);

    const onSubmit = query => {
        setSearchParams({ query, page });
    };

    return (
        <section>
            <Container>
                {isLoading && <Loader />}
                <SearchForm onSubmit={onSubmit} />
                {movies && <MovieList movies={movies} />}
                {!first && movies.length < 1 && <Page404 />}
                {error && <ToastContainer />}
            </Container>
        </section>
    );
};

export default Movies;

import { Container, HomeTitle } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useRef, useState } from 'react';
import { gethMovies } from 'services/api';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    useRef('');

    useEffect(() => {
        setIsLoading(true);
        gethMovies()
            .then(data => {
                setMovies(data.results);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <Container>
            {isLoading && <Loader />}
            <HomeTitle>Trending today</HomeTitle>
            <MovieList movies={movies} />
        </Container>
    );
};

export default Home;

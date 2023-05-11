import { Container, HomeTitle } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { gethMovies } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        gethMovies()
            .then(data => {
                setMovies(data.results);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
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
            {error && <ToastContainer />}
        </Container>
    );
};

export default Home;

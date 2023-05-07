import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import { Layout } from './Layout/Layout';
import { Cast } from './Cast/Cast';
import { Review } from './Rewiew/Review';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="review" element={<Review />} />
                </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

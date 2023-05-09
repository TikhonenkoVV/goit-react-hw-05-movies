import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() =>
    import('../components/Cast/Cast').then(module => {
        return {
            ...module,
            default: module.Cast,
        };
    })
);
const Review = lazy(() =>
    import('../components/Rewiew/Review').then(module => {
        return {
            ...module,
            default: module.Review,
        };
    })
);

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

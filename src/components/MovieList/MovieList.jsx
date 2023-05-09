import { Grid, GridItem } from 'components/App.styled';
import { useLocation } from 'react-router-dom';
import {
    CardOverlay,
    Description,
    ImgWrapper,
    MovieLink,
    MovieTitle,
} from './MovieList.styled';
import { normalizeMoviesData } from 'services/normalize';

export const MovieList = ({ movies }) => {
    const location = useLocation();
    const data = normalizeMoviesData(movies);
    return (
        <Grid>
            {data.map(({ id, movie_title, poster }) => (
                <GridItem key={id}>
                    <MovieLink
                        to={`/movies/${id}` ?? '/page-404'}
                        state={{ from: location }}
                    >
                        <ImgWrapper>
                            <img src={poster} alt={movie_title} />
                            <CardOverlay className="js-overlay">
                                <MovieTitle>{movie_title}</MovieTitle>
                                <Description>Сlick for details</Description>
                            </CardOverlay>
                        </ImgWrapper>
                    </MovieLink>
                </GridItem>
            ))}
        </Grid>
    );
};

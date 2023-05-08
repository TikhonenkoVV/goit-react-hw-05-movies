import noPoster from '../../images/no-poster.jpg';
import { MovieInfoWrapper, MovieWrapper, Poster } from './MovieInfo.styled';

export const MovieInfo = ({
    vote_average,
    title,
    overview,
    genres,
    poster_path,
    release_date,
}) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const releaseDate = new Date(release_date).getFullYear().toString();
    const rating = Math.round(vote_average * 10);

    return (
        <>
            <MovieWrapper>
                <Poster
                    src={poster_path ? IMAGES_BASE_URL + poster_path : noPoster}
                    alt={title}
                />
                <MovieInfoWrapper>
                    <h1>
                        {title} ({releaseDate})
                    </h1>
                    <p>User score: {rating}%</p>
                    <h2>Owerview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <p>{genres?.map(({ name }) => name).join(', ')}</p>
                </MovieInfoWrapper>
            </MovieWrapper>
        </>
    );
};

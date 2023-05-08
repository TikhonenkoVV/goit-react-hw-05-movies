import noPoster from '../images/no-poster.jpg';

export const normalizeMoviesData = data => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    return data.map(
        ({ id, title, original_title, name, original_name, poster_path }) => {
            const movie_title = name
                ? name
                : title
                ? title
                : original_name
                ? original_name
                : original_title;
            const poster = poster_path
                ? IMAGES_BASE_URL + poster_path
                : noPoster;
            return {
                id,
                movie_title,
                poster,
            };
        }
    );
};

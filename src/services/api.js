import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '49f12b338a85dcd14c7e661f8eadc77e';

export const gethMovies = async () => {
    const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    return data;
};

export const gethMoviesByName = async q => {
    const options = {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            // page: 1,
            query: q,
        },
    };
    const { data } = await axios.get('search/movie', options);
    return data;
};

export const gethMovieDetails = async (movieId, details) => {
    const { data } = await axios.get(
        `movie/${movieId}${details}?api_key=${API_KEY}&language=en-US`
    );
    return data;
};

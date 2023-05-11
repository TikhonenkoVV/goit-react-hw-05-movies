import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '49f12b338a85dcd14c7e661f8eadc77e';

export const gethMovies = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data;
};

export const gethMoviesByName = async (q, page) => {
    const { data } = await axios.get(
        `search/movie?api_key=${API_KEY}&page=${page}&query=${q}`
    );
    return data;
};

export const gethMovieDetails = async (movieId, details) => {
    const { data } = await axios.get(
        `movie/${movieId}${details}?api_key=${API_KEY}`
    );
    return data;
};

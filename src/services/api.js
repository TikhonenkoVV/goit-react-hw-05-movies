import axios from 'axios';

axios.defaults.url = 'https://api.themoviedb.org/3/movie/';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const fetchMovies = async () => {};

export class ApiService {}

// export const getImages = async (query, page) => {
//   const options = {
//     params: {
//       key: API_KEY,
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page: page,
//       per_page: 12,
//     },
//   };
//   const { data } = await axios('api/', options);
//   return data;
// };

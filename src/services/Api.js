import axios from 'axios';
import { BASE_API_URL } from '../constants/Queries';
const API_KEY = '1821c6b6049945b0e08619035590d15b';

export default class Api {
    /** Async method to retrieve the movie data
     * @returns {Promise<Object>} a promise wrapping the JSON response
     */
    static async getMoviesWithQuery(query) {
        try {
            const rquestUrl = `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&${query}`;
            return await axios.get(rquestUrl)
                .then((resp) => resp.data);
        } catch (error) {
            console.error('There was an error requesting the movies data', error);
        }
    }

    /** Async method to retrieve the movie details
     * @returns {Promise<Object>} a promise wrapping the JSON response
     */
    static async getMovieDetails(id) {
        try {
            const rquestUrl = `${BASE_API_URL}/movie/${id}?api_key=${API_KEY}`;
            return await axios.get(rquestUrl)
                .then((resp) => resp.data);
        } catch (error) {
            console.error('There was an error requesting the movie details', error);
        }
    }
}
import axios from 'axios';
import { BASE_API_URL } from '../constants/Queries';
const API_KEY = '1821c6b6049945b0e08619035590d15b';

export default class Api {
    /** Async method to retrieve the table data
     * @returns {Promise<Object>} a promise wrapping the JSON response
     */
    static async getMovieData(query) {
        try {
            const rquestUrl = `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&${query}`;
            return await axios.get(rquestUrl)
                .then((resp) => resp.data);
        } catch (error) {
            console.error('There was an error requesting the table data', error);
        }
    }
}
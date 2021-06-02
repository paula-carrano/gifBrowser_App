import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/search?',
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        limit: 10,
        offset: 0,
        rating: "g",
        lang: "en",
    }
});


export { api }
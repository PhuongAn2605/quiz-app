import axios from 'axios';

const Http = axios.create({
    baseURL: 'https://wpr-quiz-api.herokuapp.com/',
    timeout: 3000
});

export const addHttpHeaders = (headers) => {
    Http.defaults.headers = { ...Http.defaults.headers, ...headers}
}

Http.defaults.params = {};

export default Http;
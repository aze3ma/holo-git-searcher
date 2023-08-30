import Axios from 'axios';

const baseURL = 'https://api.github.com/search';
const accessToken = process.env.REACT_APP_GITHUB_TOKEN;

const API = Axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    },
});

export default API;

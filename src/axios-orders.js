import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-5f7b5.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://foods-back.herokuapp.com'
})

export default api;
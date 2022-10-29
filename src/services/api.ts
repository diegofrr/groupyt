import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.w2g.tv/w2g_search/',
})

export default api;
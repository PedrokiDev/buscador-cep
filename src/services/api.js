import axios from "axios"; // biblioteca para trabalhar com requisições http

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;
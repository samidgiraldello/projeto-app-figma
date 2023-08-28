import axios from "axios";

export const api = axios.create({
    baseURL: "https://adonis-samid.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})
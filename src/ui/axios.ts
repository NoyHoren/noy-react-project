/* import axios, { AxiosRequestConfig } from "axios";
const BASE_URL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

const client = axios.create({ baseURL: BASE_URL });





export const request = async (options: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) client.defaults.headers.common["x-auth-token"] = token;

    return client(options);
}; */
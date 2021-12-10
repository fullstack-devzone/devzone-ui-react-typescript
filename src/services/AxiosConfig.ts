import axios from "axios";
import { getAccessToken, cleanState } from "../store/LocalStorage";

const instance = axios.create();
const localApiUrl = "http://localhost:8080/api";

let apiUrl = process.env.REACT_APP_API_BASE_URL || localApiUrl;
console.log("REACT_APP_API_BASE_URL : " + apiUrl);
instance.defaults.baseURL = apiUrl;

instance.interceptors.request.use(function(config) {
    const accessToken = getAccessToken();
    if (config.headers !== undefined && !config.headers.Authorization && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

instance.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
            cleanState();
            window.location.href = "/login";
        } else {
            return Promise.reject(error);
        }
    }
);

export default instance;

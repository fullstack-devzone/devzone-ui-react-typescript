import axios from "./AxiosConfig";

export default class AuthService {

    performRegistration = (user: {}) => {
        return axios.post("/users", user);
    }
}
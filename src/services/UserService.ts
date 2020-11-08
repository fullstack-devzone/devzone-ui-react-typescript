import axios from "./axios-config";

export default class AuthService {

    performRegistration = (user: {}) => {
        return axios.post("/users", user);
    }
}
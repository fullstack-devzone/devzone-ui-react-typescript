import {loadState, saveState, cleanState} from "../store/localStorage";
import axios from "./axios-config";

export default class AuthService {

    performLogin = (credentials: {}) => {
        return axios.post("/auth/login", credentials)
            .then(response => {
                console.log("auth success: ", response);
                this.setCurrentUser(response.data);
                return response;
            }).catch(err => {
                console.log("login error", err);
                return Promise.reject(err)
            });
    }

    setCurrentUser = (user: {}) => {
        const state = loadState()
        const newState = {
            ...state,
            user: user
        }
        saveState(newState);
    }

    getCurrentUser = () => {
        const state = loadState()
        return state.user || {};
    }

    logout = () => {
        cleanState();
    }
}
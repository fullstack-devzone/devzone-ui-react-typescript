import axios from "./AxiosConfig";
import {cleanState, loadState, saveState} from "../store/LocalStorage";

export interface LoginUserModel {
    access_token: string
    user: UserModel
}

export interface UserModel {
    id: number,
    name: string,
    email: string,
    roles: string[]
}
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

    setCurrentUser = (user: LoginUserModel) => {
        const state = loadState()
        const newState = {
            ...state,
            user: user
        }
        saveState(newState);
    }

    getCurrentUser = (): LoginUserModel => {
        const state = loadState()
        return state.user || {};
    }

    logout = () => {
        cleanState();
    }
}
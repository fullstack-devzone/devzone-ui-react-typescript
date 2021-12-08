import axios from "./axios-config";

export interface UpdateUserModel {
    id: number
    name: string
    bio: string
    location: string
    githubUsername: string
    twitterUsername: string
}

export default class AuthService {

    performRegistration = (user: {}) => {
        return axios.post("/users", user);
    }

    updateUserProfile = (user: UpdateUserModel) => {
        return axios.put("/user", user);
    }

    getUserProfile = (id: number) => {
        return axios.get<UpdateUserModel>("/users/"+id);
    }
}
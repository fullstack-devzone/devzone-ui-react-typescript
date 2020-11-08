import axios from "./axios-config";
import {PostModel} from "../models/PostModels";

export default class PostService {
    fetchTags = () => {
        return axios.get("/tags");
    }

    fetchPosts = (page: number) => {
       return axios.get(`/links?page=${page}`);
    }

    createPost = (post: PostModel) => {
        return axios.post("/links", post);
    }
}

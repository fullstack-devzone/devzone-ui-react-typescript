import axios from "./axios-config";
import {PostModel} from "../models/PostModels";

export default class PostService {
    fetchTags = () => {
        return axios.get("/tags");
    }

    fetchPosts = (page: number, tag: string, query: string) => {
        let url = `/links?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        if(query) {
            url += `&query=${query}`;
        }
       return axios.get(url);
    }

    fetchPostsByTag = (tag:string, page: number) => {
        return axios.get(`/links?tag=${tag}&page=${page}`);
    }

    createPost = (post: PostModel) => {
        return axios.post("/links", post);
    }
}

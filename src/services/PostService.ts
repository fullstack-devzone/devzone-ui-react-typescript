import axios from "./AxiosConfig";
import {PostModel} from "../models/PostModels";

export default class PostService {

    fetchPosts = (page: number, query: string) => {
        let url = `/posts?page=${page}`;
        if(query) {
            url += `&query=${query}`;
        }
       return axios.get(url);
    }

    createPost = (post: PostModel) => {
        return axios.post("/posts", post);
    }
}

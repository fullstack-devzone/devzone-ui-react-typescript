import axios from "./axios-config";
import {LinkModel} from "../models/LinkModels";

export default class LinkService {
    fetchTags = () => {
        return axios.get("/tags");
    }

    fetchLinks = (page: number, tag: string, query: string) => {
        let url = `/links?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        if(query) {
            url += `&query=${query}`;
        }
       return axios.get(url);
    }

    fetchLinksByTag = (tag:string, page: number) => {
        return axios.get(`/links?tag=${tag}&page=${page}`);
    }

    createLink = (link: LinkModel) => {
        return axios.post("/links", link);
    }
}

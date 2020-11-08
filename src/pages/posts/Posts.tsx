import React, {useState, useEffect} from "react";

import PostService from '../../services/PostService';
import PostList from "../../components/posts/PostList";
import TagNav from "../../components/posts/TagNav";
import {PostsModel} from "../../models/PostModels";
import Search from "../../components/posts/Search";
import Pagination from "../../components/posts/Pagination";
import { useParams } from "react-router-dom";

const Posts = ( ) => {
    let { page } = useParams();
    if(!page) {
        page = 1;
    }
    //console.log("page", page)
    const postService = new PostService()
    const initialValue: PostsModel = {
        hasNext: false,
        hasPrevious: false,
        isFirst: false,
        isLast: false,
        pageNumber: 0,
        totalElements: 0,
        totalPages: 0,
        data: []}
    const [posts, setPosts] = useState(initialValue)
    const [tags, setTags] = useState([])

    useEffect(() => {
        postService.fetchTags()
            .then(response => {
                setTags(response.data)
            })
            .catch(e => {
                alert('Failed to get tags')
            });
    }, []);

    useEffect(() => {
        postService.fetchPosts(page)
            .then(response => {
                setPosts({...response.data})
            })
            .catch(e => {
                alert('Failed to get posts')
            });
    }, [page]);

    return (
        <div className="row">
            <div className="col-12">
                <div className="mt-3">
                    <div className="row">
                        <div className="offset-1 col-8">
                            <Search />
                            <Pagination {...posts} />
                            <PostList {...posts}/>
                            <Pagination {...posts} />
                        </div>
                        <div className="col-3">
                            <TagNav tags={tags}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;

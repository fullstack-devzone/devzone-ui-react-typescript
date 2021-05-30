import React, {useState, useEffect} from "react";

import PostService from '../../services/PostService';
import PostList from "../../components/posts/PostList";
import TagNav from "../../components/posts/TagNav";
import {PostsModel, PostsPaginationModel} from "../../models/PostModels";
import Search from "../../components/posts/Search";
import Pagination from "../../components/posts/Pagination";
import { useHistory, RouteComponentProps} from "react-router-dom";

type PostsState = {
    tag?: string
    query?: string
    page?: number
}

type PostsProps = RouteComponentProps<{}, {}, PostsState>;

const Posts : React.FC<PostsProps> = ( props ) => {
    const history = useHistory();
    const postService = new PostService();

    const queryParams = new URLSearchParams(props.location.search);

    let pageNo = queryParams.get('page') || "1";
    let page = +pageNo;
    let tag = queryParams.get('tag') || "";
    let query = queryParams.get('query') || "";

    //console.log("page:", page)
    //console.log("query:", query)
    //console.log("tag:", tag)

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
    let postsPaginationModel : PostsPaginationModel = {
        page: page,
        tag: tag,
        query: query,
        posts: posts || {}
    }
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
        postService.fetchPosts(page, tag, query)
            .then(response => {
                setPosts({...response.data})
            })
            .catch(e => {
                alert('Failed to get posts')
            });
    }, [page, tag, query]);

    const searchHandler = (query: string) => {
        history.push(`/posts?query=${query}`);
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="mt-3">
                    <div className="row">
                        <div className="offset-1 col-8">
                            <Search ClickHandler={searchHandler}/>
                            <Pagination {...postsPaginationModel} />
                            <PostList {...posts}/>
                            <Pagination {...postsPaginationModel} />
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

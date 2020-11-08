import React from "react";
import Post from "./Post";
import {PostsModel} from "../../models/PostModels";

const PostList: React.FC<PostsModel> = (posts) => {

    return (
        <div>
            {posts.data.map(post => <Post key={post.id} {...post}/>)}
        </div>
    );
};

export default PostList;
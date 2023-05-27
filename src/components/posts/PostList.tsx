import React from "react";
import Post from "./Post";
import {PostsModel} from "../../models/PostModels";

const PostList: React.FC<PostsModel> = (links) => {

    return (
        <div>
            {links.data.map(link => <Post key={link.id} {...link}/>)}
        </div>
    );
};

export default PostList;
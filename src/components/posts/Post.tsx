import React from "react";
import {PostModel} from "../../models/PostModels";

const Post: React.FC<PostModel> = (post) => {

    return (
        <div className="alert alert-primary" role="alert">
            <h3 className="alert-heading">
                <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
            </h3>
            <p className="mb-0">
                {post.content}
            </p>
        </div>
    );
}

export default Post;
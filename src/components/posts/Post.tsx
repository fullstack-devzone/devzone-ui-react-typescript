import React from "react";
import {NavLink} from "react-router-dom";
import {PostModel} from "../../models/PostModels";

const Post: React.FC<PostModel> = (post) => {
    const tags = post.tags.map(tag => {
        return (<span key={tag} style={{"fontSize": "20px"}}>
                    <NavLink className="badge badge-primary" to={`/posts?tag=${tag}`}>
                        {tag}
                    </NavLink>
                &nbsp;
                </span>)
    })
    return (
        <div className="alert alert-primary" role="alert">
            <h3 className="alert-heading">
                <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
            </h3>
            <p className="mb-0">
                {tags}
            </p>
        </div>
    );
}

export default Post;
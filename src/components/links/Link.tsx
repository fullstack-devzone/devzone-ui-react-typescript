import React from "react";
import {NavLink} from "react-router-dom";
import {LinkModel} from "../../models/LinkModels";

const Link: React.FC<LinkModel> = (link) => {
    const tags = link.tags.map(tag => {
        return (<span key={tag} style={{"fontSize": "20px"}}>
                    <NavLink className="badge bg-primary" to={`/links?tag=${tag}`}>
                        {tag}
                    </NavLink>
                &nbsp;
                </span>)
    })
    return (
        <div className="alert alert-primary" role="alert">
            <h3 className="alert-heading">
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
            </h3>
            <p className="mb-0">
                {tags}
            </p>
        </div>
    );
}

export default Link;
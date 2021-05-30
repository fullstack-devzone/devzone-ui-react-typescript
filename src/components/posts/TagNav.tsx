import React from "react";
import {NavLink} from "react-router-dom";

interface Tag {
    id: number,
    name: string
}

interface TagList {
    tags: Tag[]
}
const TagNav :React.FC<TagList> = (tagList) => {
    return (
        <div className="col-md-6">
            <h2>Tags</h2>
            <div className="list-group list-group-flush">
                {tagList.tags.map(tag => {
                    return(
                        <NavLink to={`/posts?tag=${tag.name}`} key={tag.id}
                           className="list-group-item list-group-item-action badge badge-primary"
                        >
                            <i className="fas fa-tag"/>&nbsp;
                            <strong style={{"fontSize": "16px"}}><span>{tag.name}</span></strong>
                        </NavLink>
                    );
                })}

            </div>
        </div>
    );
}

export default TagNav;
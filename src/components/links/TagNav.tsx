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
                        <NavLink to={`/links?tag=${tag.name}`} key={tag.id} className={'pt-1 pb-1'}>
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
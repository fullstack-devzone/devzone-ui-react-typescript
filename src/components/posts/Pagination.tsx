import React from "react";
import {PostsModel} from "../../models/PostModels";
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const Pagination: React.FC<PostsModel> = (posts) => {

    return (
        <div>
            { posts.totalPages > 1 &&
                <nav aria-label="Page navigation">
                <ul className="pagination pagination justify-content-center">
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasPrevious
                    })}>
                        <NavLink className="page-link" to="/posts">First</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasPrevious
                    })}>
                        <NavLink className="page-link" to={`/posts/page/${posts.pageNumber-1}`}>Previous</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasNext
                    })}>
                        <NavLink className="page-link" to={`/posts/page/${posts.pageNumber+1}`}>Next</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasNext
                    })}>
                        <NavLink className="page-link" to={`/posts/page/${posts.totalPages}`}>Last</NavLink>
                    </li>
                </ul>
            </nav>
            }
        </div>
    );
}

export default Pagination;
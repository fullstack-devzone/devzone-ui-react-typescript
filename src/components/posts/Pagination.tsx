import React from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {PostsPaginationModel} from "../../models/PostModels";

const Pagination: React.FC<PostsPaginationModel> = (postsPagination) : JSX.Element => {
    let posts = postsPagination.posts
    let firstPageUrl = "/posts?page=1";
    let prevPageUrl = `/posts?page=${posts.pageNumber-1}`;
    let nextPageUrl = `/posts?page=${posts.pageNumber+1}`;
    let lastPageUrl = `/posts?page=${posts.totalPages}`;

    if(postsPagination.query) {
        firstPageUrl += `&query=${postsPagination.query}`;
        prevPageUrl += `&query=${postsPagination.query}`;
        nextPageUrl += `&query=${postsPagination.query}`;
        lastPageUrl += `&query=${postsPagination.query}`;
    }

    return (
        <div>
            { posts.totalPages > 1 &&
                <nav aria-label="Page navigation">
                <ul className="pagination pagination justify-content-center">
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasPrevious
                    })}>
                        <NavLink className="page-link" to={`${firstPageUrl}`}>First</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasPrevious
                    })}>
                        <NavLink className="page-link" to={`${prevPageUrl}`}>Previous</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasNext
                    })}>
                        <NavLink className="page-link" to={`${nextPageUrl}`}>Next</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !posts.hasNext
                    })}>
                        <NavLink className="page-link" to={`${lastPageUrl}`}>Last</NavLink>
                    </li>
                </ul>
            </nav>
            }
        </div>
    );
}

export default Pagination;
import React from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {LinksPaginationModel} from "../../models/LinkModels";

const Pagination: React.FC<LinksPaginationModel> = (linksPagination) => {
    let links = linksPagination.links
    let firstPageUrl = "/links?page=1";
    let prevPageUrl = `/links?page=${links.pageNumber-1}`;
    let nextPageUrl = `/links?page=${links.pageNumber+1}`;
    let lastPageUrl = `/links?page=${links.totalPages}`;

    if(linksPagination.tag) {
        firstPageUrl += `&tag=${linksPagination.tag}`;
        prevPageUrl += `&tag=${linksPagination.tag}`;
        nextPageUrl += `&tag=${linksPagination.tag}`;
        lastPageUrl += `&tag=${linksPagination.tag}`;
    }

    if(linksPagination.query) {
        firstPageUrl += `&query=${linksPagination.query}`;
        prevPageUrl += `&query=${linksPagination.query}`;
        nextPageUrl += `&query=${linksPagination.query}`;
        lastPageUrl += `&query=${linksPagination.query}`;
    }

    return (
        <div>
            { links.totalPages > 1 &&
                <nav aria-label="Page navigation">
                <ul className="pagination pagination justify-content-center">
                    <li className={classNames({
                        "page-item": true,
                        disabled: !links.hasPrevious
                    })}>
                        <NavLink className="page-link" to={`${firstPageUrl}`}>First</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !links.hasPrevious
                    })}>
                        <NavLink className="page-link" to={`${prevPageUrl}`}>Previous</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !links.hasNext
                    })}>
                        <NavLink className="page-link" to={`${nextPageUrl}`}>Next</NavLink>
                    </li>
                    <li className={classNames({
                        "page-item": true,
                        disabled: !links.hasNext
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
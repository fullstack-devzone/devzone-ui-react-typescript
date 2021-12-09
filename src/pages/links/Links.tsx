import React, {useState, useEffect} from "react";

import LinkService from '../../services/LinkService';
import LinkList from "../../components/links/LinkList";
import TagNav from "../../components/links/TagNav";
import {LinksModel, LinksPaginationModel} from "../../models/LinkModels";
import Search from "../../components/links/Search";
import Pagination from "../../components/links/Pagination";
import { useHistory, RouteComponentProps} from "react-router-dom";

type LinksState = {
    tag?: string
    query?: string
    page?: number
}

type LinksProps = RouteComponentProps<{}, {}, LinksState>;

const Links : React.FC<LinksProps> = (props ) => {
    const history = useHistory();
    const linkService = new LinkService();

    const queryParams = new URLSearchParams(props.location.search);

    let pageNo = queryParams.get('page') || "1";
    let page = +pageNo;
    let tag = queryParams.get('tag') || "";
    let query = queryParams.get('query') || "";

    //console.log("page:", page)
    //console.log("query:", query)
    //console.log("tag:", tag)

    const initialValue: LinksModel = {
        hasNext: false,
        hasPrevious: false,
        isFirst: false,
        isLast: false,
        pageNumber: 0,
        totalElements: 0,
        totalPages: 0,
        data: []}
    const [links, setLinks] = useState(initialValue)
    const [tags, setTags] = useState([])
    let linksPaginationModel : LinksPaginationModel = {
        page: page,
        tag: tag,
        query: query,
        links: links || {}
    }
    useEffect(() => {
        linkService.fetchTags()
            .then(response => {
                setTags(response.data)
            })
            .catch(e => {
                alert('Failed to get tags')
            });
    }, []);

    useEffect(() => {
        linkService.fetchLinks(page, tag, query)
            .then(response => {
                setLinks({...response.data})
            })
            .catch(e => {
                alert('Failed to get links')
            });
    }, [page, tag, query]);

    const searchHandler = (query: string) => {
        history.push(`/links?query=${query}`);
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="mt-3">
                    <div className="row">
                        <div className="offset-1 col-8">
                            <Search ClickHandler={searchHandler}/>
                            <Pagination {...linksPaginationModel} />
                            <LinkList {...links}/>
                            <Pagination {...linksPaginationModel} />
                        </div>
                        <div className="col-3">
                            <TagNav tags={tags}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Links;

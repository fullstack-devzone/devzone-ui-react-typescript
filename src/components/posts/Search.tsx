import React, {useState} from "react";

interface SearchProps {
    ClickHandler: (query: string) => void
}

const Search : React.FC<SearchProps>= ( props ) => {
    const [query, setQuery] = useState("");

    return (
        <div>
            <form className="form-inline pb-3" method="get">
                <div className="form-group  col-md-11">
                    <input className="col-md-12 form-control" type="search" name="query" placeholder="Search for"
                           value={query}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}/>
                </div>
                <button className="btn btn-primary btn" type="button" onClick={(e) => props.ClickHandler(query)}>Search</button>
            </form>
        </div>
    );
};

export default Search;
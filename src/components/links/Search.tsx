import React, {useState} from "react";

interface SearchProps {
    ClickHandler: (query: string) => void
}

const Search : React.FC<SearchProps>= ( props ) => {
    const [query, setQuery] = useState("");

    return (
        <div className={'pb-2'}>
            <form className="row g-3 align-items-center">
                <div className="col">
                    <input className="col-md-12 form-control" type="search" name="query" placeholder="Search for"
                           value={query}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary btn" type="button" onClick={(e) => props.ClickHandler(query)}>Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;
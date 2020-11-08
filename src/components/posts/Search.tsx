import React from 'react';

const Search = () => {
    return (
        <div>
            <form className="form-inline pb-3" method="get">
                <div className="form-group  col-md-11">
                    <input className="col-md-12 form-control" type="search" name="query" placeholder="Search for"/>
                </div>
                <button className="btn btn-primary btn" type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;
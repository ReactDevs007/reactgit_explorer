import React, { Component } from "react";
import SearchResult from './searchResult';

function DisplayContent({search}) {
    const [searchTerm, setSearchTerm] = React.useState(search);

    const handleChange = value => {
        if(value !== searchTerm){
            setSearchTerm(value);
        }
    };

    return (
        <div>
            <h3 className="display-4" title="topic of search term">TOPIC <span className="badge badge-secondary">{searchTerm}</span></h3>
            <SearchResult key={search} value={search} onChange={handleChange} ></SearchResult>
        </div>
    );
}

export default DisplayContent;

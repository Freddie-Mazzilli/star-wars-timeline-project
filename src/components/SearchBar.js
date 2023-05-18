import React from "react";

function SearchBar({setSearchText}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Media:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={(event) => {
                    setSearchText(event.target.value)
                }}
            />
        </div>
    )
}

export default SearchBar
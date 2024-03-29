import React from "react";

function SearchBar({setSearchText}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Media: </label>
            <input
                className="form"
                type="text"
                id="search"
                placeholder="Search by Game name"
                onChange={(event) => {
                    setSearchText(event.target.value)
                }}
            />
        </div>
    )
}

export default SearchBar
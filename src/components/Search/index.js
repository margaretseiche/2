import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="c2 searchInput center-align">
            <input 
                onChange={props.handleInputChange}
                type="text"
                name="search"
                className="inputBox"
                placeholder="Search by name"/>
        </div>
    )
}

export default Search;
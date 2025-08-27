import React from "react";


const Search = ({SearchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <img src="search.jpg"/>
      <input
        type="text"
        placeholder="Search through thousands of movies"
        value={SearchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} //e is short for event!1!
      
      />



    </div>  
  );
}

export default Search;
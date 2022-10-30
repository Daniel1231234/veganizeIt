import React, { useState } from 'react';
import {Scroll} from './Scroll';
import {SearchList} from './SearchList';

export function SearchBar({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false)


  const filteredrecipes = details.filter(
    recipe => {
      return (
        recipe
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredrecipes={filteredrecipes} />
        </Scroll>
      );

    }
  }


  return (
    <section className="search-bar">
      <div className="search-container">
      <h2> חפש מתכונים טעימים, מהירים, טעימים ללא רכיבים מן החי!</h2>
 
        <input 
          id="search"
          className="search-input"
          type = "search" 
          placeholder="אני רוצה להכין..." 
          onChange = {handleChange}
          />

          </div>
      {searchList()}
    </section>
  );
}


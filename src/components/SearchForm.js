import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { BiSearchAlt2 } from "react-icons/bi";
import Filter from "./Filter";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <BiSearchAlt2 />
          </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            placeholder="search your favorite cocktail 🥂"
          />
        </div>
      </form>
      <Filter />
    </section>
  );
};

export default SearchForm;

import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const SearchForm = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { setSearchTerm, category, setCategory } = useGlobalContext();
  const searchValue = useRef("");
  const filterOptions = [
    "All",
    "Cocktail",
    "Ordinary Drink",
    "Other / Unknown",
  ];

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  console.log(category);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleFilter = (category) => {
    setCategory(category);
    setShowFilters(false);
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
      <div className="filter-container">
        <button
          type="button"
          className="btn btn-filters"
          onClick={() => setShowFilters(!showFilters)}
        >
          <p>{category !== "All" ? category : "filter by category"}</p>
          {showFilters ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </button>
        <div className={!showFilters ? "dropdown show-dropdown" : "dropdown"}>
          {filterOptions.map((item, index) => {
            return (
              <button
                key={index}
                className="btn dropdown-btn"
                onClick={() => handleFilter(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchForm;

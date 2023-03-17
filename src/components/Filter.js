import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { category, setCategory } = useGlobalContext();
  const filterOptions = ["All", "Cocktail", "Ordinary Drink", "Other"];
  const handleFilter = () => {
    setCategory(category);
    setShowFilters();
  };
  return (
    <div className="filter-container">
      <button
        type="button"
        className="btn btn-filters"
        onClick={() => setShowFilters(!showFilters)}
      >
        {category !== "All" ? category : "filter by category"}
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
  );
};

export default Filter;

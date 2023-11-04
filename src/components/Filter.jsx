import { useState } from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { useOutletContext } from 'react-router-dom';

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { category, setCategory } = useOutletContext();

  const filterOptions = [
    'All',
    'Cocktail',
    'Ordinary Drink',
    'Other / Unknown',
  ];

  const handleFilter = (category) => {
    setCategory(category);
    setShowFilters(false);
  };
  
  return (
    <div className="filter-container">
      <button
        type="button"
        className="btn btn-filters"
        onClick={() => setShowFilters(!showFilters)}
      >
        <p>{category !== 'All' ? category : 'filter by category'}</p>
        {showFilters ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      <div className={!showFilters ? 'dropdown show-dropdown' : 'dropdown'}>
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

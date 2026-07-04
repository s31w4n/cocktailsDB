import { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const FILTER_OPTIONS = ['All', 'Cocktail', 'Ordinary Drink', 'Other / Unknown'];

function Filter() {
  const [showFilters, setShowFilters] = useState(false);

  const containerRef = useRef(null);
  const { category, setCategory } = useGlobalContext();

  useEffect(() => {
    if (!showFilters) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowFilters(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setShowFilters(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilters]);

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
    setShowFilters(false);
  };

  const filterLabel = category !== 'All' ? category : 'filter by category';

  return (
    <div className="filter-container" ref={containerRef}>
      <button
        type="button"
        id="category-filter-button"
        className="btn btn-filters"
        aria-expanded={showFilters}
        aria-haspopup="listbox"
        aria-controls="category-filter-list"
        onClick={() => setShowFilters(!showFilters)}
      >
        <span>{filterLabel}</span>
        {showFilters ? (
          <IoMdArrowDropdown aria-hidden="true" />
        ) : (
          <IoMdArrowDropup aria-hidden="true" />
        )}
      </button>
      <div
        id="category-filter-list"
        role="listbox"
        aria-labelledby="category-filter-button"
        aria-hidden={!showFilters}
        className={!showFilters ? 'dropdown show-dropdown' : 'dropdown'}
      >
        {FILTER_OPTIONS.map((item) => (
          <button
            key={item}
            type="button"
            role="option"
            aria-selected={category === item}
            className="btn dropdown-btn"
            onClick={() => handleFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;

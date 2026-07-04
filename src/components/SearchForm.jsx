import Filter from './Filter';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useDebounce } from '../hooks/useDebounce';
import { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';

const SearchForm = () => {
  const [query, setQuery] = useState('a');

  const inputRef = useRef(null);
  const debouncedQuery = useDebounce(query);
  const { setSearchTerm } = useGlobalContext();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setSearchTerm(debouncedQuery);
  }, [debouncedQuery, setSearchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(query);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="cocktail-search">
            <BiSearchAlt2 aria-hidden="true" />
            <span className="sr-only">Search cocktails</span>
          </label>
          <input
            type="search"
            value={query}
            ref={inputRef}
            id="cocktail-search"
            placeholder="search your favorite cocktail 🥂"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </form>
      <Filter />
    </section>
  );
};

export default SearchForm;

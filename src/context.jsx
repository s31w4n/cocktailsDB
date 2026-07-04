import { searchCocktails } from './api/cocktailDb';
import React, { useMemo, useState, useEffect, useCallback } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [cocktails, setCocktails] = useState([]);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loadedTerm, setLoadedTerm] = useState(null);

  const activeTerm = searchTerm || 'a';
  const loading = loadedTerm !== activeTerm;

  useEffect(() => {
    let cancelled = false;

    searchCocktails(activeTerm)
      .then((results) => {
        if (cancelled) return;
        setCocktails(results);
        setError(null);
        setLoadedTerm(activeTerm);
      })
      .catch(() => {
        if (cancelled) return;
        setError('Something went wrong. Please try again.');
        setCocktails([]);
        setLoadedTerm(activeTerm);
      });

    return () => {
      cancelled = true;
    };
  }, [activeTerm]);

  const retry = useCallback(async () => {
    const term = searchTerm || 'a';
    setLoadedTerm(null);

    try {
      const results = await searchCocktails(term);
      setCocktails(results);
      setError(null);
      setLoadedTerm(term);
    } catch {
      setError('Something went wrong. Please try again.');
      setCocktails([]);
      setLoadedTerm(term);
    }
  }, [searchTerm]);

  const filteredCocktails = useMemo(() => {
    if (category === 'All') {
      return cocktails;
    }

    return cocktails.filter((item) => item.category === category);
  }, [category, cocktails]);

  return (
    <AppContext.Provider
      value={{
        error,
        loading,
        category,
        setCategory,
        setSearchTerm,
        retry,
        cocktails: filteredCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

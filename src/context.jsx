import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { searchCocktails } from './api/cocktailDb';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('a');

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchCocktails(searchTerm);
      setCocktails(results);
    } catch {
      setError('Something went wrong. Please try again.');
      setCocktails([]);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchDrinks();
  }, [fetchDrinks]);

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
        retry: fetchDrinks,
        cocktails: filteredCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

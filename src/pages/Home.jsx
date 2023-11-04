import { useLoaderData, useOutletContext } from 'react-router-dom';
import { SearchForm, CocktailList } from '../components';
import { useQuery } from '@tanstack/react-query';
import { searchUrl } from '../utils';
import { useMemo } from 'react';
import axios from 'axios';

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${searchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// in order to access the queryClient inside of the loader we need to setup an extra function, now loader is
// a function which grabs queryClient and then returns another function.
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    // ensureQueryData checks for data in the cache if exists it will returns it if not fetch and return.
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Home = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  const { category } = useOutletContext();

  const filteredCocktails = useMemo(() => {
    if (category === 'All') {
      return drinks;
    } else {
      return drinks.filter((item) => item.strCategory === category);
    }
  }, [category, drinks]);

  return (
    <main>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList data={filteredCocktails} />
    </main>
  );
};

export default Home;

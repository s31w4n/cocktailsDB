import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Layout, Home, SingleCocktail, Error, SinglePageError } from './pages';
import { loader as singleCocktailLoader } from './pages/SingleCocktail';
import { loader as homePageLoader } from './pages/Home';

// NOTE: (loader) in react router is not a hook so we won't be able to use useQuery directly in loaders.
// NOTE: we have to pass in the query first.
// NOTE: we can setup stale time, how long that query is going to be valid globally.

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 1 second in millisecond 1000 * 60 second = 1 minute * 5 = 5 minute
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Layout>
        <Error />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: homePageLoader(queryClient), // we pass down queryClient like this and now we invoking homePageLoader
        errorElement: <SinglePageError />,
      },
      {
        path: 'cocktail/:id',
        element: <SingleCocktail />,
        loader: singleCocktailLoader(queryClient),
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

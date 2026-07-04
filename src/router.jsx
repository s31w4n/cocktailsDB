import Home from './pages/Home';
import Error from './pages/Error';
import RootLayout from './layouts/RootLayout';
import SingleCocktail from './pages/SingleCocktail';
import { createBrowserRouter } from 'react-router-dom';
import { cocktailLoader } from './loaders/cocktailLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'cocktail/:id',
        loader: cocktailLoader,
        Component: SingleCocktail,
        errorElement: <Error />,
      },
      {
        path: '*',
        Component: Error,
      },
    ],
  },
]);

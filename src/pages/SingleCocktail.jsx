import { singleCocktailUrl as url, formatSingleDrink } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const SingleCocktail = () => {
  const { id } = useLoaderData();

  const { data } = useQuery(singleCocktailQuery(id));

  const cocktail = formatSingleDrink(data);

  if (!data) {
    return <h2 className="section-title">there was an error...</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <div className="single-cocktail-link">
        <Link to="/" className="btn-primary">
          back home
        </Link>
      </div>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return (
                <span key={index}>
                  {item}
                  {index < ingredients.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </section>
  );
};
export default SingleCocktail;

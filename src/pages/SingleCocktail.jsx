import { Link, useLoaderData } from 'react-router-dom';

function SingleCocktail() {
  const { name, image, category, info, glass, instructions, ingredients } =
    useLoaderData();

  return (
    <section className="section cocktail-section">
      <div className="single-cocktail-link">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
      <div className="drink">
        <img src={image} alt={name} />
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
            {ingredients.map((item) => (
              <span key={item}> {item}</span>
            ))}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;

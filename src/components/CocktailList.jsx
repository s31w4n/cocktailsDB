import { formatDrinks } from '../utils';
import Cocktail from './Cocktail';

const CocktailList = ({ data }) => {
  if (!data) {
    return <h4 className="section-title">No matching cocktails found!</h4>;
  }

  const cocktails = formatDrinks(data);

  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktails matched</h2>;
  }

  return (
    <section className="section">
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;

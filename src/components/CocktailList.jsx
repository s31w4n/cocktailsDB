import Loading from './Loading';
import Cocktail from './Cocktail';
import ErrorMessage from './ErrorMessage';
import { useGlobalContext } from '../context';

function CocktailList() {
  const { cocktails, loading, error, retry } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={retry} />;
  }

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
}

export default CocktailList;

import { Form, useNavigation } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import Filter from './Filter';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <section className="section search">
      <Form className="search-form">
        <div className="form-control">
          <label htmlFor="search">
            <BiSearchAlt2 />
          </label>
          <input
            type="search"
            name="search"
            placeholder="search your favorite cocktail 🥂"
            defaultValue={searchTerm}
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="btn-primary btn-search"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
      <Filter />
    </section>
  );
};

export default SearchForm;

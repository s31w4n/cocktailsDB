import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

function getErrorMessage(error) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return 'cocktail not found';
    }

    return 'something went wrong loading this cocktail';
  }

  return "oops! it's a dead end";
}

const Error = () => {
  const error = useRouteError();
  const message = getErrorMessage(error);

  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>{message}</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;

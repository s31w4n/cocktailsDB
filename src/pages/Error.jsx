import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <section className="error-page">
        <img src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>We can't seem to find the page you are looking for!</p>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </section>
    );
  }

  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>something went wrong ...</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;

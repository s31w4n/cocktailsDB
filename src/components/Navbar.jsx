import { Link } from 'react-router-dom';
import { Logo, Theme } from '.';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <Logo />
        </Link>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;

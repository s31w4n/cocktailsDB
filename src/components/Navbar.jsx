import Logo from './Logo';
import Theme from './Theme';
import { Link } from 'react-router-dom';

function Navbar() {
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
}

export default Navbar;

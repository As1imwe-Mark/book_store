import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <span>Bookstore CMS</span>
    <nav>
      <Link to="/">Book</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </div>
);

export default Nav;

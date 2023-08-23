import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <span className="cms">Bookstore CMS</span>
    <nav>
      <Link className="nav-book" to="/">Book</Link>
      <Link className="nav-category" to="/categories">Categories</Link>
    </nav>
  </div>
);
export default Nav;

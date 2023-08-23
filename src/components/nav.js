import { Link } from 'react-router-dom';
import UserIcon from './userIcon';

const Nav = () => (
  <div className="nav">
    <span className="cms">Bookstore CMS</span>
    <nav>
      <Link className="nav-book" to="/">Book</Link>
      <Link className="nav-category" to="/categories">Categories</Link>
    </nav>
    <div className="icon"><UserIcon /></div>
  </div>
);
export default Nav;

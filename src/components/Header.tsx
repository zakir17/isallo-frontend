import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <h1>
          <Link to="/">isallo</Link>
        </h1>
        <nav>
          <button>drop down</button>
          <ul>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/main">Journey</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

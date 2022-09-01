import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SubmissionForm from "./SubmissionForm";
import logoUrl from "../assets/isallo-bright.svg";

const Header = () => {
  const [seeNav, setSeeNav] = useState<boolean>(false);
  return (
    <div className="Header">
      <header>
        <h1>
          <Link to="/">
            <img src={logoUrl} alt="logo" />
          </Link>
        </h1>
        <nav>
          {seeNav ? (
            <button onClick={() => setSeeNav(false)}>Close Nav</button>
          ) : (
            <button onClick={() => setSeeNav(true)}>See Nav</button>
          )}

          {seeNav ? (
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
          ) : (
            ""
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

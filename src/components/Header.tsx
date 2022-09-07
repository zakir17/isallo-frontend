import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SubmissionForm from "./SubmissionForm";
import logoUrl from "../assets/isallo-bright.svg";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
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
            <i
              className="fa-solid fa-bars fa-3x"
              onClick={() => setSeeNav(false)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars fa-3x"
              onClick={() => setSeeNav(true)}
            ></i>
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
                <Link to="/main">My Journey</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {user ? (
                  <a onClick={() => signOut()}>Sign out</a>
                ) : (
                  <a onClick={() => signInWithGoogle()}>Sign in</a>
                )}
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

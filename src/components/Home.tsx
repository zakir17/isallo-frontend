import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import Submission from "../models/Submission";
import { getAllSubmissions } from "../service/submissionService";
import "./Home.css";

const Home = () => {
  const { user } = useContext(AuthContext);
  const userFirstName = user?.displayName?.split(" ")[0];
  return (
    <div className="Home">
      <h2>Welcome {user && `back, ${userFirstName}.`}</h2>
      {user ? (
        <>
          <p>
            Clarity is formed by wading through the mud, the murkiest waters of
            life, and finding where the seemingly unrelated are intertwined.
          </p>
          <Link to="/main">
            <button>Continue Your Journey</button>
          </Link>
        </>
      ) : (
        <>
          <p>
            isallo is a virtual journal that helps users track their emotional
            trends over time. By evaluating our feelings and experiences, we can
            better understand ourselves and the world around us.
          </p>
          <Link to="/main">
            <button onClick={() => signInWithGoogle()}>
              Start Your Journey
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;

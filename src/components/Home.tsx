import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import Submission from "../models/Submission";
import { getAllSubmissions } from "../service/submissionService";
import "./Home.css";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Home">
      {user ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signInWithGoogle()}>Sign in</button>
      )}

      <Link to="/main">Main</Link>
    </div>
  );
};

export default Home;

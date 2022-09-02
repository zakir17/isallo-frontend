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
      <p>
        Clarity is formed by wading through the mud, the murkiest waters of
        life, and finding where the seemingly unrelated are intertwined.
      </p>
      <Link to="/main">
        <button>Start Your Journey</button>
      </Link>
    </div>
  );
};

export default Home;

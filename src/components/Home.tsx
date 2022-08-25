import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
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
    </div>
  );
};

export default Home;

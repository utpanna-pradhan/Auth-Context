import { useContext } from "react";
import { AuthContext } from "../Context/AuthXContext";
import Loginbtn from "./Loginbtn";
import Logoutbtn from "./Logoutbtn";

function Test() {
  const { user } = useContext(AuthContext);

  return (
    <div className="auth-container">
      <p className="status-text">
        {user ? `Welcome, ${user.name}` : "Please login to continue"}
      </p>

      <div className="btn-wrapper">
        {user ? <Logoutbtn /> : <Loginbtn />}
      </div>
    </div>
  );
}

export default Test;

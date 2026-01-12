import { useContext } from "react";
import { AuthContext } from "../Context/AuthXContext";

function Loginbtn() {
  const { login } = useContext(AuthContext);

  return (
    <button className="login" onClick={login}>
      Login
    </button>
  );
}

export default Loginbtn;

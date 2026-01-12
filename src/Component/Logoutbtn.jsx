import { useContext } from "react";
import { AuthContext } from "../Context/AuthXContext";

function Logoutbtn() {
  const { logout } = useContext(AuthContext);

  return (
    <button className="logout" onClick={logout}>
      Logout
    </button>
  );
}

export default Logoutbtn;

import React from 'react'
import { useContext  } from 'react'
import { AuthContext } from '../Context/AuthXContext'
import Loginbtn from './Loginbtn';
import Logoutbtn from './Logoutbtn';

function Test() {
    const {user} = useContext(AuthContext)
    console.log(user);
    
  return (
    <div>
    Status : {user ? `WelCome ${user.name}` : "Please Login"}
    <br></br>
    {user ? <Logoutbtn />: <Loginbtn />}
    </div>
  )
}

export default Test
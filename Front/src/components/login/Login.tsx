import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  isLogged,
  loginAsync,
  logout
} from './loginSlice';

export function Login() {
  const dispatch = useAppDispatch();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const logged = useAppSelector(isLogged)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      logout()
    }
  }, [])
  

  return (
    <div>
      {!logged ?
        <div>
          <h2>Login</h2><br />
          Username: <input onChange={(e) => setusername(e.target.value)} /><br />
          Password:<input type="password" onChange={(e) => setpassword(e.target.value)} /><br />
          <button onClick={() => dispatch(loginAsync({ username, password }))}>Login</button><br />
        </div> :
        <button onClick={() => dispatch(logout())}>Logout</button>}

    </div>
  );
}

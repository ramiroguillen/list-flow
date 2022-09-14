import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className='btn btn-success' style={{width: "6rem"}}>Log In</button>;
};

export default LoginButton;
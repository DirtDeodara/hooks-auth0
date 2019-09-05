import React from "react";
import { useAuth0 } from "../Auth0Provider";
import Counter from "./Counter/Counter";

export default function App() {
  const { isAuthenticated, user, loading, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();
  console.log(isAuthenticated, "hello");

  return (
    <>
      {!isAuthenticated && <button onClick={login}>Get up in this</button>}
      {isAuthenticated && <button onClick={logout}>Get up out this</button>}
      {isAuthenticated && <Counter />}
    </>
  );
}

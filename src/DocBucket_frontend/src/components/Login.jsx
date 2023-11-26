import React, {useState, useEffect} from 'react'
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import {
  createActor,
  DocBucket_backend,
} from "../../../declarations/DocBucket_backend";


const Login = () => {

  const [authClient, setAuthClient] = useState(null);
  const [principal, setPrincipal] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);

      const identity = await client.getIdentity();
      const usePrincipal = await identity.getPrincipal()
      setPrincipal(usePrincipal);
    }
    initializeAuth();
  }, []);

  const handleLogin = async (e) => {
    if (authClient) {
      e.preventDefault();
      await authClient.login({
        onSuccess: async () => {
          const identity = await authClient.getIdentity();
          const usePrincipal = await identity.getPrincipal()
          setPrincipal(usePrincipal);
        },
      });
    }
  }
  return (
    <>
      <div class="container">
        <h2>Login Form</h2>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter your Email"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password"/>
          </div>
          <div class="form-group">
            <button onClick={handleLogin} type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login



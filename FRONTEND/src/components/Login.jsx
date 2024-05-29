// LoginForm.js
import React, { useState, useEffect } from 'react';
import firebase from '../CONFDataBase/firebaseConfig';
import './LoginForm.css'; // Importar estilos CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      setCurrentUser(user);
      sessionStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    sessionStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <div className="container">
      <div className="login-box">
        {currentUser ? (
          <div>
            <h1 className="title"> Desconectar  {currentUser.email}</h1>
            <button className="button" onClick={handleLogout}>Sign out</button>
          </div>
        ) : (
          <div>
            <h1 className="title">Login with Email and Password</h1>
            <form onSubmit={handleLogin}>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <div>{error}</div>}
              <button className="button" type="submit">Log In</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

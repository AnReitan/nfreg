import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate ();


  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sjekk om brukernavn og passord er riktig
    if (username === 'u1' && password === 'qaz') {
      onLogin(true); // Innlogging vellykket
      navigate('/main'); // Redirect to main page after successful login
    } else {
      alert('Feil brukernavn eller passord');
    }
  };

  return (
    <div>
      <h2>Logg inn</h2><br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>
        
        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <button type="submit">Logg inn</button>
      </form>
    </div>
  );
};

export default Login;
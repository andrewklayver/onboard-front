import React, { useState } from "react";
import "./screen-login.css";

const TelaLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="card-login">
      <label className="name-input" htmlFor="username">
        Email:
      </label>
      <input
        className="inputs"
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label className="name-input" htmlFor="password">
        Senha:
      </label>
      <input
        className="inputs"
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
};

export default TelaLogin;

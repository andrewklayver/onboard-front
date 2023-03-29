import React, { useState } from "react";
import "./screenlogin.css";

const TelaLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="LoginTela">
      <label className="email" htmlFor="username">
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
      <label className="senha" htmlFor="password">
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

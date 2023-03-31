import React, { useState } from "react";
import "./screen-login.css";

const TelaLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidEmail(email) && isValidPassword(password)) {
      // API DE LOGIN AQUI
      console.log("login válido");
    } else {
      console.log("login inválido");
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("E-mail inválido");
      return false;
    }
    setEmailError("");
    return true;
  };

  const isValidPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Senha inválida");
      return false;
    }
    setPasswordError("");
    return true;
  };

  return (
    <form className="card-login" onSubmit={handleLogin}>
      <label className="name-input" htmlFor="username">
        Email:
      </label>
      <input
        className="inputs"
        type="text"
        id="username"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <span className="error-message">{emailError}</span>
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
      <span className="error-message">{passwordError}</span>
      <br />
      <button
        className="button"
        type="submit"
        onClick={() => {
          if (email == "") {
            setEmailError("Preencha o campo");
          }
          if (password == "") {
            setPasswordError("Preencha o campo");
          }
          console.log("");
        }}
      >
        Login
      </button>
    </form>
  );
};

export default TelaLogin;

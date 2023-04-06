import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import "./screen-login.css";

interface LoginInput {
  email: string;
  password: string;
}

interface LoginData {
  login: {
    token: string;
  };
}

interface LoginVariables {
  data: LoginInput;
}

const LOGIN_MUTATION = gql`
  mutation login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

const TelaLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [login, { error }] = useMutation<LoginData, LoginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted: (data) => {
        const key = "token";
        localStorage.setItem(key, `${data.login.token}`);
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidEmail(email) && isValidPassword(password)) {
      const { data } = await login({
        variables: {
          data: {
            email: email,
            password: password,
          },
        },
      });
      console.log("login válido", data);
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
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
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
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default TelaLogin;

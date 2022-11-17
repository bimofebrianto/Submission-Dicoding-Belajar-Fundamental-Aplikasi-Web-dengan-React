import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../components-button";
import LocaleContext from "../../contexts/LocaleContext";
import PropType from 'prop-types';

const LoginInput = ({ login }) => {
  const { locale, theme } = useContext(LocaleContext);

  const useInput = (defaultValue = "") => {
    const [value, setValue] = useState(defaultValue);

    const onValueChangeHandler = (event) => {
      setValue(event.target.value);
    };

    return [value, onValueChangeHandler];
  };

  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    login(userData);
  };

  return (
    <form className="wrapper-login" onSubmit={onSubmit}>
      {locale === "id" ? (
        <h1>Silahkan masuk terlebih dahulu</h1>
      ) : (
        <h1>Please login first</h1>
      )}
      <p>{locale === "id"}</p>

      <label>Email</label>
      <Input
        placeholder={"email"}
        width={"100%"}
        padding={"15px"}
        margin={"20px 0px 20px 0px"}
        type="email"
        id="email"
        onChange={onEmailChange}
        value={email}
        backgroundColor={theme === "light" ? "#fff" : "#181818"}
        color={theme === "light" ? "#181818" : "#fff"}
      />
      <label>Password</label>
      <Input
        placeholder={"password"}
        width={"100%"}
        padding={"15px"}
        margin={"20px 0px 20px 0px"}
        type="password"
        id="password"
        onChange={onPasswordChange}
        value={password}
        backgroundColor={theme === "light" ? "#fff" : "#181818"}
        color={theme === "light" ? "#181818" : "#fff"}
      />
      <Button
        label={"Login"}
        style={{
          width: "100%",
          padding: "15px",
          margin: "20px 0px 20px 0px",
          fontWeight: 800,
          backgroundColor: "#0ca597",
          border: "none",
          cursor: "pointer",
        }}
      />
      {locale === "id" ? (
        <p>
          Belum punya akun? <Link style={{color: "#8758ff"}} to={"/register"}>Daftar disini</Link>
        </p>
      ) : (
        <p>
          Don't have an account yet? <Link style={{color: "#8758ff"}} to={"/register"} >Register here</Link></p>
      )}
    </form>
  );
};

LoginInput.protoType = {
  login: PropType.func.isRequired,
}



export default LoginInput;

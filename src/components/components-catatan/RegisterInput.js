import React, { useContext, useState } from "react";
import { Button, Input } from "../components-button";
import { register } from "../../utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LocaleContext from "../../contexts/LocaleContext";

const RegisterInput = () => {
  const { locale, theme } = useContext(LocaleContext);

  const navigate = useNavigate();

  const useInput = (defaultValue = "") => {
    const [value, setValue] = useState(defaultValue);

    const onValueChangeHandler = (event) => {
      setValue(event.target.value);
    };

    return [value, onValueChangeHandler];
  };

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [password2, onPassword2Change] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2 || password2 !== password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      const userData = {
        name,
        email,
        password,
      };
      register(userData).then((res) => {
        navigate("/");
      });
    }
  };

  return (
    <form className="wrapper-login" onSubmit={onSubmit}>
      {locale === "id" ? <h1>Silakan isi formulir di bawah ini</h1> : <h1>Please fill in the form below</h1>}

      <label>Name</label>
      <Input
        placeholder={"name"}
        width={"100%"}
        padding={"15px"}
        margin={"20px 0px 20px 0px"}
        type="name"
        id="name"
        onChange={onNameChange}
        value={name}
        backgroundColor={theme === "light" ? "#fff" : "#181818"}
        color={theme === "light" ? "#181818" : "#fff"}
      />
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
      <label>Confirm Password</label>
      <Input
        placeholder={"confirm password"}
        width={"100%"}
        padding={"15px"}
        margin={"20px 0px 20px 0px"}
        type="password"
        id="password"
        onChange={onPassword2Change}
        value={password2}
        backgroundColor={theme === "light" ? "#fff" : "#181818"}
        color={theme === "light" ? "#181818" : "#fff"}
      />
      <Button
        label={"Register"}
        style={{
          width: "100%",
          padding: "15px",
          margin: "20px 0px 20px 0px",
          fontWeight: 800,
          backgroundColor: "#0ca597",
          cursor: "pointer",
          border: "none",
        }}
      />
      {locale === "id" ? (
        <p>
          Sudah punya akun?{" "}
          <Link style={{ color: "#8758ff" }} to="/login">
            Klik disini
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Link style={{ color: "#8758ff" }} to="/login">
            Click here
          </Link>
        </p>
      )}
    </form>
  );
};

export default RegisterInput;

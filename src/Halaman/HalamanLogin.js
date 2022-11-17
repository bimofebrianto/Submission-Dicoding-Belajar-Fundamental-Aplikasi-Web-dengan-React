import React from "react";
import { LoginInput } from "../components/components-catatan";
import { login } from "../utils/network-data";
import PropType from "prop-types";

const HalamanLogin = ({ loginSuccess }) => {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }
  return (
    <div className="container-login">
      <LoginInput login={onLogin} />
    </div>
  );
};
HalamanLogin.PropType = {
  loginSuccess: PropType.func.isRequired,
};
export default HalamanLogin;

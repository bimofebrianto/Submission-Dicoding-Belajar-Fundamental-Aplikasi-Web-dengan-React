import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../../contexts/LocaleContext";
import PropType from 'prop-types';

const Header = ({ logout, user }) => {
  const [value, setValue] = useState();

  const { locale, toggleLocale } = useContext(LocaleContext);

  const handleChange = (e) => {
    setValue(e.target.value);
    toggleLocale(value);
  };

  return (
    <header className="header">
      <div className="left">
        <Link to="/" className="header-logo">
          {locale === "id" ? <h1>Catatan 77</h1> : <h1>Notes 77</h1>}
        </Link>
        <select
          name="bahasa"
          id="bahasa"
          className="select-bahasa"
          onChange={handleChange}
          value={locale}
        >
          <option value="id">Indonesia</option>
          <option value="en">English</option>
        </select>
      </div>
      {user === null ? null : (
        <div className="right">
          <h3 >{user.name}</h3>
          <Link to="/archives" className="arsip">
            {locale === "id" ? <h1>Arsip Catatan</h1> : <h1>Archive Notes</h1>}
          </Link>
          <button className="btn-logout" onClick={logout}>
            {locale === "id" ? "Keluar" : "Logout"}
          </button>
        </div>
      )}
    </header>
  );
};

Header.protoType = {
  logout: PropType.func.isRequired,
  user: PropType.object.isRequired,
}

export default Header;

import { IconMoon, IconSun } from "../../img";
import LocaleContext, { LocaleConsumer } from "../../contexts/LocaleContext";
import React, { useContext } from "react";

const Toggle = () => {
  const { theme } = useContext(LocaleContext);
  return (
    <LocaleConsumer>
      {({ toggleTheme }) => {
        return (
          <div className="container-toggle">
            <img className="icon-toggle" src={IconMoon} alt="iconbulan" />
            <img className="icon-toggle" src={IconSun} alt="iconmatahari" />
            <button
              className="btn-toggle"
              onClick={toggleTheme}
              style={{
                left: theme === "light" ? 0 : 25,
              }}
            ></button>
          </div>
        );
      }}
    </LocaleConsumer>
  );
};

export default Toggle;

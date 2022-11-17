import React from "react";
import { Route, Routes } from "react-router-dom";
import HalamanUtamaCatatan from "./Halaman/HalamanUtama";
import { TambahHalaman, HalamanCatatan, HalamanArsipCatatan, LoginPage as HalamanLogin, HalamanTidakDitemukan, HalamanRegistrasi } from "./Halaman";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { LocaleProvider } from "./contexts/LocaleContext";
import { Header } from "./components/components-catatan";
import { Toggle } from "./components/components-button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
        theme: localStorage.getItem("theme") || "light",
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme = prevState.localeContext.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return {
              localeContext: {
                ...prevState.localeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate() {
    document.documentElement.setAttribute("data-theme", this.state.localeContext.theme);
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }

  render() {
    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div>
            <header>
              <Header user={this.state.authedUser} />
            </header>
            <main>
              <Toggle />
              <Routes>
                <Route path="/*" element={<HalamanLogin loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<HalamanRegistrasi />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      );
    }

    return (
      <LocaleProvider value={this.state.localeContext}>
        <div>
          <header>
            <Header logout={this.onLogout} user={this.state.authedUser} />
          </header>
          <main>
            <Toggle />
            <Routes>
              <Route element={<HalamanUtamaCatatan />} path="/" />
              <Route element={<TambahHalaman />} path="/notes/new" />
              <Route element={<HalamanCatatan />} path={"/notes/:id"} />
              <Route element={<HalamanArsipCatatan />} path={"/archives"} />
              <Route element={<HalamanTidakDitemukan />} path="/*" />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    );
  }
}
export default App;

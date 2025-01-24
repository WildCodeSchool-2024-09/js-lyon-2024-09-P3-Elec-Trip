import { useState } from "react";

import NavHome from "../components/Nav/NavHome";

import "../App.css";
import "./Account.css";

function Account() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLoginClick = () => {
    setIsLogin(true);
  };
  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const [accountForm, setAccountForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountForm({ ...accountForm, [e.target.name]: e.target.value });
    // console.info("Form changed:", { [e.target.name]: e.target.value });
  };

  // >> creation de compte > POST <<
  const handleSubmitCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.info("Creating account with:", accountForm);

    fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accountForm),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erreur serveur");
        return response.json();
      })
      .then((data) => console.log("Compte créé :", data))
      .catch((error) => console.error("Erreur création :", error));
  };

  // >> connexion au compte > POST <<
  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.info("Logging in with:", accountForm);

    fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountForm }),
      // })
      //   .then((response) => {
      //     console.info("Login response:", response);
      //   })
      //   .catch((error) => {
      //     console.error("Login error:", error);
    });
  };

  return (
    <header className="accountPage">
      <NavHome />
      <section className="accountContenair">
        <article className="accountInfos">
          <article className="accountButton">
            <button type="button" onClick={handleSignupClick}>
              Inscription
            </button>
            <button type="button" onClick={handleLoginClick}>
              Connexion
            </button>
          </article>
          {isLogin ? (
            // >> connexion au compte <<
            <form className="accountForm" onSubmit={handleSubmitLogin}>
              <h1>Connectez-vous à votre compte</h1>
              <label htmlFor="email">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChangeForm}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={handleChangeForm}
                />
              </label>
              <input type="submit" />
            </form>
          ) : (
            // >> création de compte <<
            <form className="accountForm" onSubmit={handleSubmitCreate}>
              <h1>Créez votre compte</h1>
              <label htmlFor="firstname">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Prénom"
                  onChange={handleChangeForm}
                />
              </label>
              <label htmlFor="lastname">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Nom"
                  onChange={handleChangeForm}
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChangeForm}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={handleChangeForm}
                />
                <input type="submit" />
              </label>
            </form>
          )}
        </article>
      </section>
    </header>
  );
}

export default Account;

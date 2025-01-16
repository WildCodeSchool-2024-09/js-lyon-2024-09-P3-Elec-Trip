import { useState } from "react";

import NavHome from "../components/Nav/NavHome";

import "../App.css";
import "./Account.css";

import IconMail from "../images/icon_log_mail.png";
import IconPassword from "../images/icon_log_password.png";
import IconUser from "../images/icon_log_user.png";

function Account() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
    <main>
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
            <>
              <h1>Connectez-vous à votre compte</h1>
              <label className="accountLabel" htmlFor="email">
                <img
                  src={IconMail}
                  alt="icone email renseigner son adresse mail"
                />
                Email
              </label>
              <input
                className="accountInput"
                type="text"
                id="email"
                name="email"
              />
              <label className="accountLabel" htmlFor="password">
                <img
                  src={IconPassword}
                  alt="icone verrou renseigner son mot de passe"
                />
                Mot de passe
              </label>
              <input
                className="accountInput"
                type="password"
                id="password"
                name="password"
              />
            </>
          ) : (
            <>
              <h1>Créez votre compte</h1>
              <label className="accountLabel" htmlFor="firstname">
                <img src={IconUser} alt="icone utilisateur" />
                Nom
              </label>
              <input
                className="accountInput"
                type="text"
                id="firstname"
                name="firstname"
              />
              <label className="accountLabel" htmlFor="lastname">
                <img src={IconUser} alt="icone utilisateur" />
                Nom
              </label>
              <input
                className="accountInput"
                type="text"
                id="lastname"
                name="lastname"
              />
              <label className="accountLabel" htmlFor="email">
                <img
                  src={IconMail}
                  alt="icone email renseigner son adresse mail"
                />
                Email
              </label>
              <input
                className="accountInput"
                type="text"
                id="email"
                name="email"
              />
              <label className="accountLabel" htmlFor="password">
                <img
                  src={IconPassword}
                  alt="icone verrou renseigner son mot de passe"
                />
                Mot de passe
              </label>
              <input
                className="accountInput"
                type="password"
                id="password"
                name="password"
              />
            </>
          )}
        </article>
      </section>
    </main>
  );
}

export default Account;

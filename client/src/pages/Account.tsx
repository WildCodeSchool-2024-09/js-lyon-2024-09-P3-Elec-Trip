import { useState } from "react";

import NavHome from "../components/Nav/NavHome";

import "../App.css";
import "./Account.css";

// import IconMail from "../images/icon_log_mail.png";
// import IconPassword from "../images/icon_log_password.png";
// import IconUser from "../images/icon_log_user.png";

function Account() {
  const [isLogin, setIsLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
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
            <form className="accountForm">
              <h1>Connectez-vous à votre compte</h1>
              <label className="accountLabel" htmlFor="email">
                {/* <img
                  src={IconMail}
                  alt="icone email renseigner son adresse mail"
                /> */}
              </label>
              <input
                className="accountInput"
                type="text"
                id="email"
                name="email"
                defaultValue={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="accountLabel" htmlFor="password">
                {/* <img
                  src={IconPassword}
                  alt="icone verrou renseigner son mot de passe"
                /> */}
              </label>
              <input
                className="accountInput"
                type="password"
                id="password"
                name="password"
                defaultValue={password}
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="validateBtn" type="button">
                Se connecter
              </button>
            </form>
          ) : (
            <form className="accountForm">
              <h1>Créez votre compte</h1>
              <label className="accountLabel" htmlFor="lastname">
                {/* <img src={IconUser} alt="icone utilisateur" /> */}
              </label>
              <input
                className="accountInput"
                type="text"
                id="firstname"
                name="firstname"
                defaultValue={firstname}
                placeholder="Prénom"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label className="accountLabel" htmlFor="lastname">
                {/* <img src={IconUser} alt="icone utilisateur" /> */}
              </label>
              <input
                className="accountInput"
                type="text"
                id="lastname"
                name="lastname"
                defaultValue={lastname}
                placeholder="Nom"
                onChange={(e) => setLastname(e.target.value)}
              />
              <label className="accountLabel" htmlFor="email">
                {/* <img
                  src={IconMail}
                  alt="icone email renseigner son adresse mail"
                /> */}
              </label>
              <input
                className="accountInput"
                type="text"
                id="email"
                name="email"
                defaultValue={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="accountLabel" htmlFor="password">
                {/* <img
                  src={IconPassword}
                  alt="icone verrou renseigner son mot de passe"
                /> */}
              </label>
              <input
                className="accountInput"
                type="password"
                id="password"
                name="password"
                defaultValue={password}
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="validateBtn" type="button">
                Confirmer
              </button>
            </form>
          )}
        </article>
      </section>
    </header>
  );
}

export default Account;

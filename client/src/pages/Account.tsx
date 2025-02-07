import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

import NavHome from "../components/Nav/NavHome";

import "../App.css";
import "./Account.css";

function Account() {
  const { login } = useAuth(); // utilisation du custom Hook

  const navigate = useNavigate(); // utilisation de la redirection

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
    hashed_password: "",
  });

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountForm({ ...accountForm, [e.target.name]: e.target.value });
  };

  // >> creation de compte > POST <<
  const handleSubmitCreate: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(accountForm),
        },
      );

      if (response.status === 201) {
        toast.info("Votre compte à bien été crée ! 😊");
      } else {
        toast.error("Une erreur s'est produite, veuillez réessayer");
      }
    } catch (err) {
      console.error(err);
      toast.error("Une erreur inattendue est survenue.");
    }
  };

  // >> connexion au compte > POST <<
  const handleSubmitLogin: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(accountForm),
        },
      );

      if (response.status === 200) {
        const user = await response.json();
        login(user);
        navigate("/"); // Redirection sur la homepage en cas de succès
      } else {
        toast.error("Une erreur s'est produite, veuillez réessayer");
      }
    } catch (err) {
      console.error(err);
      toast.error("Une erreur inattendue est survenue.");
    }
  };

  return (
    <header className="accountPage">
      <NavHome />
      <section className="accountContenair">
        <article className="accountInfos">
          <article className="accountButton">
            <button type="button" onClick={handleSignupClick}>
              Connexion
            </button>
            <button type="button" onClick={handleLoginClick}>
              Inscription
            </button>
          </article>
          {isLogin ? (
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
              </label>
              <input type="submit" />
            </form>
          ) : (
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
          )}
        </article>
      </section>
    </header>
  );
}

export default Account;

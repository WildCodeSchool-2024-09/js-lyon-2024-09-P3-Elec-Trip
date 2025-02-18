import NavHome from "../Nav/NavHome";

import "./Header.css";

import IconScroll from "../../images/icon_scroll.png";

function Header() {
  return (
    <header className="headerHome">
      <NavHome />
      <section className="headerContenair">
        <article className="headerInfos">
          <h1>
            Louez ou rechargez votre véhicule n'importe où en France, à
            n'importe quelle heure
          </h1>
          <p>
            Electrip est l'outil de réservation tout-en-un, consultable à la
            fois sur votre ordinateur, votre tablette, mais également sur votre
            mobile. Avec Electrip, louez ou rechargez votre véhicule électrique
            au plus proche de votre position.
          </p>
        </article>
      </section>
      <div className="iconCenter">
        <img
          className="iconScroll"
          src={IconScroll}
          alt="Icone qui invite scroll"
        />
      </div>
    </header>
  );
}

export default Header;

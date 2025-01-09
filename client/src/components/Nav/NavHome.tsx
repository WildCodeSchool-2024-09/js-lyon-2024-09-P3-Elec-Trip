import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavHome.css";

import BurgerMenu from "../../images/Burger-menu_blanc.png";
import Logo from "../../images/Logo_ELECTRIP.png";
import IconHome from "../../images/icon_home.png";

function NavHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 860);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  };

  return (
    <nav className="navHome">
      <img className="imgNavHome" src={Logo} alt="Logo de Electrip" />
      {isMobile ? (
        <>
          <img
            src={BurgerMenu}
            alt={BurgerMenu}
            className="burgerMenu"
            onClick={toggleMenu}
            onKeyDown={handleKeyPress}
          />
          {isMenuOpen && (
            <div className="menuBubble">
              <ul>
                <Link to="/" className="linkBurger">
                  Accueil
                </Link>
                <Link to="/trouver_une_borne" className="linkBurger">
                  Trouver une borne
                </Link>
                <Link to="/trouver_une_voiture" className="linkBurger">
                  Trouver une voiture
                </Link>
                <Link to="/questions" className="linkBurger">
                  Des questions?
                </Link>
                <Link to="/mon_compte" className="linkButton">
                  <button type="button">S'inscrire</button>
                </Link>
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul>
          <Link to="/">
            <img src={IconHome} alt="Icone page Accueil" />
          </Link>
          <Link to="/trouver_une_borne" className="link">
            Trouver une borne
          </Link>
          <Link to="/trouver_une_voiture" className="link">
            Trouver une voiture
          </Link>
          <Link to="/questions" className="link">
            Des questions?
          </Link>
          <Link to="/mon_compte" className="linkButton">
            <button type="button">S'inscrire</button>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default NavHome;

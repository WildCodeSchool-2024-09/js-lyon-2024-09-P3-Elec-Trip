import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavHome.css";

import burgermenu from "../../images/Burger-menu_blanc.png";
import logo from "../../images/Logo_ELECTRIP.png";
import iconHome from "../../images/icon_home.png";

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
      <img className="imgNavHome" src={logo} alt="logo" />
      {isMobile ? (
        <>
          <img
            src={burgermenu}
            alt={burgermenu}
            className="burgermenu"
            onClick={toggleMenu}
            onKeyDown={handleKeyPress}
          />
          {isMenuOpen && (
            <div className="menu-bubble">
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
            <img src={iconHome} alt="home" />
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

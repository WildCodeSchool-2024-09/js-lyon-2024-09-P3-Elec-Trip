import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Nav/Nav.css";

import BurgerMenu from "../../images/Burger-menu.png";
import IconHomeMap from "../../images/icon_home_map.png";
import Logo from "../../images/logo_mobile_ELECTRIP.png";

function Nav() {
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
    <div className="wrapNav">
      <nav className="nav">
        <img className="imgnav" src={Logo} alt="Logo de Electrip" />
        {isMobile ? (
          <>
            <img
              src={BurgerMenu}
              alt="logo indiquant le bouton du menu"
              className="burgerMenu"
              onClick={toggleMenu}
              onKeyDown={handleKeyPress}
            />
            {isMenuOpen && (
              <div className="menuBubble">
                <ul>
                  <Link to="/" className="linkBurgerNav">
                    Accueil
                  </Link>
                  <Link to="/trouver_une_borne" className="linkBurgerNav ">
                    Trouver une borne
                  </Link>
                  <Link to="/trouver_une_voiture" className="linkBurgerNav ">
                    Trouver une voiture
                  </Link>
                  {/* <Link to="/questions" className="linkBurgerNav ">
                    Des questions?
                  </Link> 
                  */}
                  <Link to="/mon_compte" className="linkButtonMapNav">
                    <button type="button">S'inscrire</button>
                  </Link>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul>
            <Link to="/">
              <img src={IconHomeMap} alt="Icone page Accueil" />
            </Link>
            <Link to="/trouver_une_borne" className="linkMapNav">
              Trouver une borne
            </Link>
            <Link to="/trouver_une_voiture" className="linkMapNav">
              Trouver une voiture
            </Link>
            {/* <Link to="/questions" className="linkMapNav">
              Des questions?
            </Link> 
            */}
            <Link to="/mon_compte" className="linkButtonMapNav">
              <button type="button">S'inscrire</button>
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Nav;

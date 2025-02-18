import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Nav/Nav.css";

import BurgerMenu from "../../images/Burger-menu.png";
import IconHomeMap from "../../images/icon_home_map.png";
import UserProfileImage from "../../images/login_gris.png";
import Logo from "../../images/logo_mobile_ELECTRIP.png";

import { useAuth } from "../../contexts/AuthContext";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 860);
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate("/");
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
                  <Link to="/" className="linkBurger">
                    Accueil
                  </Link>
                  <Link to="/trouver_une_borne" className="linkBurger">
                    Trouver une borne
                  </Link>
                  <Link to="/trouver_une_voiture" className="linkBurger">
                    Trouver une voiture
                  </Link>

                  {auth ? (
                    <div
                      onClick={handleLogout}
                      className="linkButtonMapNav"
                      onKeyDown={(e) => e.key === "Enter" && handleLogout()}
                    >
                      <img
                        src={UserProfileImage}
                        alt="Se déconnecter"
                        className="user-profile-image"
                      />
                    </div>
                  ) : (
                    <Link to="/mon_compte" className="linkButtonMapNav">
                      <button type="button">S'authentifier</button>
                    </Link>
                  )}
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul>
            <Link to="/">
              <img
                src={IconHomeMap}
                alt="Icone page Accueil"
                className="nav-map-icon"
              />
            </Link>
            <Link to="/trouver_une_borne" className="linkMapNav">
              Trouver une borne
            </Link>
            <Link to="/trouver_une_voiture" className="linkMapNav">
              Trouver une voiture
            </Link>

            {auth ? (
              <div
                onClick={handleLogout}
                className="linkButtonMapNav"
                onKeyDown={(e) => e.key === "Enter" && handleLogout()}
              >
                <img
                  src={UserProfileImage}
                  alt="Se déconnecter"
                  className="user-profile-image"
                />
              </div>
            ) : (
              <Link to="/mon_compte" className="linkButtonMapNav">
                <button type="button">S'authentifier</button>
              </Link>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Nav;

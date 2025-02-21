import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./NavHome.css";

import BurgerMenu from "../../images/Burger-menu_blanc.png";
import Logo from "../../images/Logo_ELECTRIP.png";
import IconHome from "../../images/icon_home.png";
import UserProfileImage from "../../images/login_blanc.png";

import { useAuth } from "../../contexts/AuthContext";

function NavHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 860);
  const { auth, logout } = useAuth(); // Added logout from context
  const navigate = useNavigate(); // For navigation after logout

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
    logout(); // Call logout from auth context
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className="navHome">
      <img className="imgNavHome" src={Logo} alt="Logo de Electrip" />
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
                    className="linkButton"
                    onKeyDown={(e) => e.key === "Enter" && handleLogout()}
                  >
                    <img
                      src={UserProfileImage}
                      alt="Se déconnecter"
                      className="user-profile-image"
                    />
                  </div>
                ) : (
                  <Link to="/mon_compte" className="linkButton">
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
              src={IconHome}
              alt="Icone page Accueil"
              className="nav-home-icon"
            />
          </Link>
          <Link to="/trouver_une_borne" className="link">
            Trouver une borne
          </Link>
          <Link to="/trouver_une_voiture" className="link">
            Trouver une voiture
          </Link>

          {auth ? (
            <div
              onClick={handleLogout}
              className="linkButton"
              onKeyDown={(e) => e.key === "Enter" && handleLogout()}
            >
              <img
                src={UserProfileImage}
                alt="Se déconnecter"
                className="user-profile-image"
              />
            </div>
          ) : (
            <Link to="/mon_compte" className="linkButton">
              <button type="button" className="btn neumorphic">
                S'authentifier
              </button>
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
}

export default NavHome;

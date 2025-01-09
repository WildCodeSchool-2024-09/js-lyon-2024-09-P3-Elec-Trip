import Logo from "../../images/logo_mobile_ELECTRIP.png";
import "../Nav/Nav.css";
import burgermenu from "../../images/Burger-menu.png";

function Nav() {
  return (
    <section className="navbar">
      <img src={Logo} alt={Logo} className="logo" />
      <img src={burgermenu} alt={burgermenu} className="burgermenu" />
    </section>
  );
}

export default Nav;

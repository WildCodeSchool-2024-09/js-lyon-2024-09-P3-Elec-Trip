import Logo from "../../images/logo_mobile_ELECTRIP.png";
import "../Nav/Nav.css";
import Burgermenu from "../../images/Burger-menu.png";

function Nav() {
  return (
    <section className="navbar">
      <img src={Logo} alt="Logo de ElecTrip" className="logo" />
      <img
        src={Burgermenu}
        alt="bouton indiquant le menu"
        className="burgermenu"
      />
    </section>
  );
}

export default Nav;

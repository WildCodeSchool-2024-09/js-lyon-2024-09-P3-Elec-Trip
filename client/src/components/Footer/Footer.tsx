import Prise from "../../images/btn_borne_minimenu.png";
import Menu from "../../images/btn_menu_minimenu.png";
import Voiture from "../../images/btn_voiture_minimenu.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <img src={Menu} alt="menulogo" />
        <img src={Prise} alt="priselogo" />
        <img src={Voiture} alt="voiturelogo" />
      </section>
    </>
  );
}

export default Footer;

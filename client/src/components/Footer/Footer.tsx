import Wire from "../../images/btn_borne_minimenu.png";
import Car from "../../images/btn_voiture_minimenu.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <img src={Wire} alt="Wirelogo" />
        <img src={Car} alt="voiturelogo" />
      </section>
    </>
  );
}

export default Footer;

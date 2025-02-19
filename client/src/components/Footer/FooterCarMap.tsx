import { Link } from "react-router-dom";

import Charger from "../../images/map_minimenu_Charger.png";
import Wire from "../../images/map_minimenu_Filtre.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <img src={Wire} alt="Wirelogo" />
        <Link to="/trouver_une_borne">
          <img src={Charger} alt="voiturelogo" />
        </Link>
      </section>
    </>
  );
}

export default Footer;

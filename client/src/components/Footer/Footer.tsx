import { Link } from "react-router-dom";

import Car from "../../images/map_minimenu_Car.png";
import Wire from "../../images/map_minimenu_Filtre.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <img src={Wire} alt="Wirelogo" />
        <Link to="/trouver_une_voiture">
          <img src={Car} alt="voiturelogo" />
        </Link>
      </section>
    </>
  );
}

export default Footer;

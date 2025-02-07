import { Link } from "react-router-dom";

import Edf from "../../images/edf.png";
import Engie from "../../images/engie.png";
import Green from "../../images/green-choice.png";
import Total from "../../images/total-energie.png";

import "./Footerhome.css";

function Footer() {
  return (
    <>
      <section className="partnersHome">
        <div className="wrapPartnersHome">
          <img src={Edf} alt="edflogo" />
          <img src={Engie} alt="engielogo" />
          <img src={Total} alt="totallogo" />
          <img src={Green} alt="greenlogo" />
        </div>
      </section>
      <footer className="footerHome">
        <div className="wrapFooterHome">
          <p>BORNE to be alive présente le projet ELECTRIP</p>
          <Link className="linkCGU" to="/Conditions_Generales_d'Utilisation">
            Conditions Générales d'Utilisation
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;

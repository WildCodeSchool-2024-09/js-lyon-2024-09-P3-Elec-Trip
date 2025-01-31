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
          <p>Conditions générales d'utilisation</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

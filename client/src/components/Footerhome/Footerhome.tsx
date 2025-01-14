import Edf from "../../images/edf.png";
import Engie from "../../images/engie.png";
import Green from "../../images/green-choice.png";
import Total from "../../images/total-energie.png";
import "./Footerhome.css";

function Footer() {
  return (
    <>
      <section className="footerhome">
        <img className="footerHomeImage" src={Edf} alt="edflogo" />
        <img className="footerHomeImage" src={Engie} alt="engielogo" />
        <img className="footerHomeImage" src={Green} alt="greenlogo" />
        <img className="footerHomeImage" src={Total} alt="totallogo" />
      </section>
    </>
  );
}

export default Footer;

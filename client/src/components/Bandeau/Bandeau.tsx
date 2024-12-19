import Prise from "../../images/mini_icone_borne.png";
import "./Bandeau.css";

function Bandeau() {
  return (
    <>
      <section className="bandeau">
        <img src={Prise} alt="prise" className="prise" />
        <p> Réserver</p>
        <p>Valider</p>
      </section>
      ;
    </>
  );
}

export default Bandeau;

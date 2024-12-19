import "./Selection.css";
import carImage from "../../images/Borne_recharge_illustration.png";

function Selection() {
  return (
    <div className="selection-container">
      <section className="adresse">
        <h2>Place des archives</h2>
        <p>18 rue Jean Jaures</p>
        <p>69002 Lyon</p>
      </section>

      <section className="bloc-info">
        <section className="voiture">
          <img src={carImage} alt="Voiture" />
        </section>

        <div className="details">
          <section className="distance">
            <p>Distance</p>
            <b>336 m</b>
          </section>

          <section className="disponibilite">
            <p>Disponibilité</p>
            <span className="statut-libre">🟢 Libre</span>
          </section>

          <section className="temps">
            <p>Temps d'utilisation</p>
            <b>⏱️ 2 jours</b>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Selection;

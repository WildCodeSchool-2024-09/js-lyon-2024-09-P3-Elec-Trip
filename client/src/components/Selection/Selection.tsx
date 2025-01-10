import "./Selection.css";
import CarImage from "../../images/Borne_recharge_illustration.png";

function Selection() {
  return (
    <div className="selection-container">
      <section className="adress">
        <h2>Place des archives</h2>
        <p>18 rue Jean Jaures</p>
        <p>69002 Lyon</p>
      </section>

      <section className="bloc-info">
        <section className="car">
          <img src={CarImage} alt="Voiture electrique" />
        </section>

        <div className="details">
          <section className="distance">
            <p>Distance</p>
            <b>336 m</b>
          </section>

          <section className="availability">
            <p>Disponibilité</p>
            <span className="statut-available">🟢 available</span>
          </section>

          <section className="time">
            <p>Temps d'utilisation</p>
            <b>⏱️ 2 jours</b>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Selection;

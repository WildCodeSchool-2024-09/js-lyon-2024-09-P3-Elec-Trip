import Wire from "../../images/mini_icone_borne.png";
import "./banner.css";

function banner() {
  return (
    <>
      <section className="banner">
        <img src={Wire} alt="Wire logo" className="WireImage" />
        <div className="wrapReservBtn">
          <p>Réserver</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="sliderRound" />
          </label>
          <button className="ButtonReserv" type="submit">
            Valider
          </button>
        </div>
      </section>
    </>
  );
}

export default banner;

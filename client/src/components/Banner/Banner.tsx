import Wire from "../../images/mini_icone_borne.png";
import "./banner.css";

function banner() {
  return (
    <>
      <section className="banner">
        <img src={Wire} alt="Wire logo" className="WireImage" />

        <p> Réserver</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="sliderRound" />
        </label>
        <button className="ButtonReserv" type="submit">
          Valider
        </button>
      </section>
    </>
  );
}

export default banner;

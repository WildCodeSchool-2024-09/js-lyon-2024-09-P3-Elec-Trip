import Wire from "../../images/mini_icone_borne.png";
import "./banner.css";

function banner() {
  return (
    <>
      <section className="banner">
        <img src={Wire} alt="Wire" className="Wire" />
        <p> Réserver</p>
        <p>Valider</p>
      </section>
      ;
    </>
  );
}

export default banner;

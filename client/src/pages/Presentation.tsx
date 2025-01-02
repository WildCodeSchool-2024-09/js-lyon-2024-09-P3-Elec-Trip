import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "../App.css";
import "./Presentation.css";

import img_about from "../images/img_about.jpg";
import img_borne from "../images/img_borne.jpg";
import img_voiture from "../images/img_voiture.jpg";
import marker_about from "../images/marker_about.png";
import marker_borne from "../images/marker_borne.png";
import marker_voiture from "../images/marker_voiture.png";

function Presentation() {
  return (
    <>
      <Header />
      <section className="section1">
        <div className="homeContenair">
          <div className="homeInfo">
            <div className="homeTitle">
              <img src={marker_borne} alt={marker_borne} />
              <h2>Trouver une borne</h2>
            </div>
            <div className="homeContent">
              <p>
                Avec notre service de localisation avancé, Electrip vous
                garantie de trouver rapidement une borne de recharge dans la
                région, ville, arrondissement souhaité. Vous pouvez également
                définir votre périmètre de recherche pour faciliter votre
                recherche.
              </p>
              <Link to="/trouver_une_borne">
                <button type="button">Trouver une borne</button>
              </Link>
            </div>
          </div>
          <img className="imgHome" src={img_borne} alt={img_borne} />
        </div>
      </section>

      <section className="section2">
        <div className="homeContenair2">
          <div className="homeInfo2">
            <div className="homeTitle">
              <img src={marker_voiture} alt={marker_voiture} />
              <h2>Trouver une voiture</h2>
            </div>
            <div className="homeContent">
              <p>
                De la même manière que pour trouver une borne, vous pouvez louer
                et localiser rapidement un véhicule électrique dans la région,
                ville, arrondissement que vous souhaité, avec toujours la
                possibilité de définir votre périmètre de recherche pour
                faciliter votre recherche.
              </p>
              <Link to="/trouver_une_voiture">
                <button type="button">Trouver une voiture</button>
              </Link>
            </div>
          </div>
          <img className="imgHome" src={img_voiture} alt={img_voiture} />
        </div>
      </section>

      <section className="section1">
        <div className="homeContenair">
          <div className="homeInfo">
            <div className="homeTitle">
              <img src={marker_about} alt={marker_about} />
              <h2>À propos</h2>
            </div>
            <div className="homeContent">
              <p>
                Electrip est la première super-appli française de localisation
                de borne de recharge et de location de véhicule électrique. Nous
                luttons pour des villes plus respirable en offrant de meilleures
                alternatives à la voiture thermique.
              </p>
              <ul>
                <li>Plus de 2 millions d'usagés sur nos services</li>
                <li>
                  Large couverture avec environ 70% du territoire Français.
                </li>
              </ul>
            </div>
          </div>
          <img className="imgHome" src={img_about} alt={img_about} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Presentation;

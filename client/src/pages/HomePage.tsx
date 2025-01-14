import { Link } from "react-router-dom";

import Footer from "../components/Footerhome/Footerhome";
// import "../components/Footerhome/Footerhome.tsx";
import Header from "../components/Header/Header";

import "../App.css";
import "./HomePage.css";
import "../components/Footerhome/Footerhome.css";

import ImgAbout from "../images/img_about.jpg";
import ImgCharger from "../images/img_borne.jpg";
import ImgCar from "../images/img_voiture.jpg";
import MarkerAbout from "../images/marker_about.png";
import MarkerCharger from "../images/marker_borne.png";
import MarkerCar from "../images/marker_voiture.png";
import MarkerQuestion from "../images/point-dinterrogation.png";

function HomePage() {
  return (
    <>
      <Header />
      <section className="section1">
        <div className="homeContenair">
          <div className="homeInfo">
            <div className="homeTitle">
              <img src={MarkerCharger} alt="Chargeur de voiture" />
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
          <img className="imgHome" src={ImgCharger} alt="cliqué d'une borne" />
        </div>
      </section>

      <section className="section2">
        <div className="homeContenair2">
          <div className="homeInfo2">
            <div className="homeTitle">
              <img src={MarkerCar} alt="cliché d'une voiture" />
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
          <img className="imgHome" src={ImgCar} alt="cliché d'une voiture" />
        </div>
      </section>

      <section className="section1">
        <div className="homeContenair">
          <div className="homeInfo">
            <div className="homeTitle">
              <img src={MarkerAbout} alt="Icone qui redirige vers à propos" />
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
          <img
            className="imgHome"
            src={ImgAbout}
            alt="cliché illustrant un homme qui cour"
          />
        </div>
        <img
          className="questionimage"
          src={MarkerQuestion}
          alt="Logo indiquant la partie Questions Fréquentes"
        />
      </section>

      <section className="section2">
        <div className="homeContenair">
          <div className="homeContent">
            <h2 className="title">Questions fréquentes</h2>
            <input type="checkbox" id="view-0" />
            <label htmlFor="view-0">
              Puis-je bénéficier des services de localisation de bornes pour mon
              véhicule personnel ?
            </label>
            <div className="content" id="content-0">
              <div>
                Oui, vous pouvez utiliser notre service pour localiser
                rapidement les bornes de recharge proches de votre véhicule.
                Accédez à notre carte interactive pour vérifier leur
                disponibilité et leurs caractéristiques en temps réel.
              </div>
            </div>

            <input type="checkbox" id="view-1" />
            <label htmlFor="view-1">
              Quel est le prix de l'utilisation d'une borne de recharge ?
            </label>
            <div className="content" id="content-1">
              <div>
                Vous trouverez toutes les informations dans l'onglet "Tarifs".
              </div>
            </div>
            <input type="checkbox" id="view-2" />
            <label htmlFor="view-2">
              Combien de temps puis-je utiliser une borne de recharge ?
            </label>
            <div className="content" id="content-2">
              <div>La durée minimal est de 15min est ne peut exéder 2h00.</div>
            </div>

            <input type="checkbox" id="view-3" />
            <label htmlFor="view-3">
              Quel est le prix d'une location d'un véhicule électrique ?
            </label>
            <div className="content" id="content-3">
              <div>
                Here you can write the necessary code to provide details.
              </div>
            </div>

            <input type="checkbox" id="view-4" />
            <label htmlFor="view-4">
              Combien de temps puis-je me véhiculer avec le véhicule loué ?
            </label>
            <div className="content" id="content-4">
              <div>
                Here you can write the necessary code to provide details.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;

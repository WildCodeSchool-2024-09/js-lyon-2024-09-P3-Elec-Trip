import { Link } from "react-router-dom";

import Footer from "../components/Footerhome/Footerhome";
import Header from "../components/Header/Header";

import "../App.css";
import "./HomePage.css";

import Buttonplus from "../images/btn_+.png";
import ImgAbout from "../images/img_about.jpg";
import ImgCharger from "../images/img_borne.jpg";
import ImgCar from "../images/img_voiture.jpg";
import MarkerAbout from "../images/marker_about.png";
import MarkerCharger from "../images/marker_borne.png";
import MarkerCar from "../images/marker_voiture.png";

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
      </section>

      <section className="section2">
        <div className="homeContenair">
          <div className="homeContent">
            <h2>Questions fréquentes</h2>
            <details className="homeDetails">
              <summary className="homeSummary">
                Puis-je bénéficier des services de localisation de bornes pour
                mon véhicule personnel ?
                <img
                  className="buttonplus"
                  src={Buttonplus}
                  alt="bouton pour developper"
                />
              </summary>
              <p>
                Oui, vous pouvez utiliser notre service pour localiser
                rapidement les bornes de recharge proches de votre véhicule.
                Accédez à notre carte interactive pour vérifier leur
                disponibilité et leurs caractéristiques en temps réel.
              </p>
            </details>
            <details className="homeDetails">
              <summary className="homeSummary">
                Quel est le prix de l'utilisation d'une borne de recharge ?
                <img
                  className="buttonplus"
                  src={Buttonplus}
                  alt="bouton pour developper"
                />
              </summary>
              <p>
                Vous trouverez toutes les informations dans l'onglet "Tarifs".
              </p>
            </details>
            <details className="homeDetails">
              <summary className="homeSummary">
                Combien de temps puis-je utiliser une borne de recharge ?
                <img
                  className="buttonplus"
                  src={Buttonplus}
                  alt="bouton pour developper"
                />
              </summary>
              <p>La durée minimal est de 15min est ne peut exéder 2h00.</p>
            </details>
            <details className="homeDetails">
              <summary className="homeSummary">
                Quel est le prix d'une location d'un véhicule électrique ?
                <img
                  className="buttonplus"
                  src={Buttonplus}
                  alt="bouton pour developper"
                />
              </summary>
              <p>
                Vous trouverez toutes les informations dans l'onglet "Tarifs".
              </p>
            </details>
            <details className="homeDetails">
              <summary className="homeSummary">
                Combien de temps puis-je me véhiculer avec le véhicule loué ?
                <img
                  className="buttonplus"
                  src={Buttonplus}
                  alt="bouton pour developper"
                />
              </summary>
              <p>
                Il n'y a aucune limite de temps, vous payez au prorata du temps
                de location
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;

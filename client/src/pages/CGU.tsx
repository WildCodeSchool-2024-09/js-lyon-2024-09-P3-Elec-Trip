import { useEffect } from "react";
import Nav from "..//components/Nav/Nav";
import Footer from "../components/Footerhome/Footerhome";

import "../App.css";
import "./CGU.css";

function CGU() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />

      <section className="CGUContenair">
        <h1>Les Conditions Générales d'Utilisation</h1>
        <h2>1. Objet</h2>
        <p>
          Les présentes CGU définissent les conditions d'utilisation du service
          Electrip, accessible via l'application mobile, le site web et les
          tablettes (ci-après "le Service"). Electrip est un outil de
          réservation tout-en-un permettant la location et la recharge de
          véhicules électriques.
        </p>
        <h2>2. Acceptation des CGU</h2>
        <p>
          L'utilisation du Service implique l'acceptation pleine et entière des
          présentes CGU. L'Utilisateur est invité à les lire attentivement avant
          toute utilisation du Service.
        </p>
        <h2>3. Accès au Service</h2>
        <p>
          <h3>Disponibilité</h3>
          Electrip s'efforce de rendre le Service accessible 24h/24 et 7j/7,
          sauf en cas de force majeure ou d'événements hors de son contrôle, et
          sous réserve des périodes maintenance et des pannes éventuelles.
          <h3>Équipement</h3>
          L'Utilisateur doit disposer des équipements et logiciels nécessaires,
          ainsi que d'une connexion internet, pour accéder au Service.
        </p>
        <h2>4. Utilisation du Service</h2>
        <p>
          <h3>Réservation et recharge</h3>
          Le Service permet de louer et de recharger des véhicules électriques à
          proximité de la position de l'Utilisateur1.
          <h3>Obligations de l'Utilisateur</h3>
          <ul>
            L'Utilisateur s'engage à :
            <li>Utiliser le Service conformément à sa destination </li>
            <li>
              Respecter les conditions particulières des fournisseurs de charge
            </li>
            <li>
              Utiliser uniquement des équipements compatibles et homologués
              Suivre les instructions d'utilisation des bornes de recharge
            </li>
          </ul>
        </p>
        <h2>5. Données personnelles</h2>
        <p>
          Electrip traite les données personnelles des Utilisateurs conformément
          à sa politique de confidentialité et au RGPD. Les données collectées
          incluent les informations d'identité, les coordonnées de contact et
          les informations d'utilisation du Service
        </p>
        <h2>6. Responsabilité</h2>
        <p>
          L'Utilisateur est responsable de l'état et de l'entretien de son
          véhicule, ainsi que de son utilisation conforme des bornes de recharge
        </p>
        <h2>7. Suspension ou résiliation</h2>
        <p>
          Electrip se réserve le droit de suspendre ou résilier l'accès au
          Service en cas d'utilisation frauduleuse, de non-respect des CGU ou de
          tout autre motif sérieux.
        </p>
        <h2>8. Modification des CGU</h2>
        <p>
          Electrip se réserve le droit de modifier les présentes CGU. Les
          Utilisateurs seront informés de toute modification substantielle.
        </p>
        <h2>9. Loi applicable et juridiction compétente</h2>
        <p>
          Les présentes CGU sont soumises au droit français. Tout litige relatif
          à leur interprétation ou leur exécution relève de la compétence des
          tribunaux français.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default CGU;

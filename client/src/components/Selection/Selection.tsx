import "./Selection.css";
import type { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { useCoordinates } from "../../contexts/EVStationContext.tsx";
import borne from "../../images/Borne_recharge_illustration.png";

interface coordinatesOfCurrentStation {
  id: number;
  id_station: string;
  n_station: string;
  ad_station: string;
  ylatitude: string;
  nbre_pdc: number;
  acces_recharge: string;
  puiss_max: number;
  type_prise: string;
  coordinates: LatLngTuple;
  id_bornes: number[];
  available_bornes: boolean[];
}

type location = [number, number]; //location Latitude / Longitude

// -------------------------------------------------------------------------------
// get detail of following code http://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

// https://en.wikipedia.org/wiki/Haversine_formula getDistanceFromLatLonInKm() explained
function getDistanceFromLatLonInKm(
  UserLocation: location,
  coordinatesOfCurrentStation: coordinatesOfCurrentStation,
): number {
  // lat1,lon1,lat2,lon2
  const UserLocationLat = UserLocation[0]; //latitude
  const UserLocationLong = UserLocation[1]; //longitude
  const coordinatesOfCurrentStationLat =
    coordinatesOfCurrentStation.coordinates[0];
  const coordinatesOfCurrentStationLong =
    coordinatesOfCurrentStation.coordinates[1];

  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(UserLocationLat - coordinatesOfCurrentStationLat); // deg2rad below
  const dLon = deg2rad(UserLocationLong - coordinatesOfCurrentStationLong);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(coordinatesOfCurrentStationLat)) *
      Math.cos(deg2rad(UserLocationLat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km

  return distance;
}
// -------------------------------------------------------------------------------

function writeDistanceToKilometerOrMeter(distanceFromBorne: number): string {
  if (distanceFromBorne < 1) {
    const distanceFromBorneStringMeter = Math.floor(distanceFromBorne * 100);
    return `${distanceFromBorneStringMeter} m`;
  }
  const distanceFromBorneStringKilometer = distanceFromBorne.toFixed(2);
  return `${distanceFromBorneStringKilometer} km`;
}

function countAvailableBornes(
  available_bornesArray: boolean[],
  booleanType: boolean,
): number {
  // filter return a tab. So we just need to get length to figure out the count.
  const count = available_bornesArray.filter(
    (borne) => Boolean(borne) === booleanType,
  ).length;
  return count;
}

//if any other borne is available does return "non dispo"
function isAvailable(available_bornesArray: boolean[]): string {
  const resultAvailable = countAvailableBornes(available_bornesArray, true); // if borne id defined as 1

  if (resultAvailable === available_bornesArray.length)
    return "🔴 Non Disponible";

  return "🟢 Disponible";
}

function writeBorneDescription(available_bornesArray: boolean[]): string {
  const returnAvailableBornes = `${available_bornesArray.length}`;

  return ` ${returnAvailableBornes} bornes`;
}

function Selection() {
  //This is context state share with Display map // please read above type "coordinatesOfCurrentStation"
  const { location, coordinatesOfCurrentStation } = useCoordinates();

  //States declared below are load in jsx return to fill content with data of current borne selected by user
  const [distanceFromBorne, setDistanceFromBorne] = useState<string>("");
  const [borneDescription, setBorneDescription] = useState<string>("");
  const [borneAvailable, setBorneAvailable] = useState<string>("");

  useEffect(() => {
    if (coordinatesOfCurrentStation) {
      const findOutDistance = getDistanceFromLatLonInKm(
        location,
        coordinatesOfCurrentStation,
      );
      const distanceKmOrmeter =
        writeDistanceToKilometerOrMeter(findOutDistance);
      const borneDetails = writeBorneDescription(
        coordinatesOfCurrentStation.available_bornes,
      );
      const defineAvability = isAvailable(
        coordinatesOfCurrentStation.available_bornes,
      );

      setDistanceFromBorne(distanceKmOrmeter);
      setBorneAvailable(defineAvability);
      setBorneDescription(borneDetails);
      //console.log(coordinatesOfCurrentStation);
    }
  }, [coordinatesOfCurrentStation, location]);

  return (
    <>
      {coordinatesOfCurrentStation ? (
        <div className="selection-container">
          <section className="adress">
            <h2>{coordinatesOfCurrentStation.n_station}</h2>
            <p>{coordinatesOfCurrentStation.ad_station}</p>
          </section>

          <section className="bloc-info">
            <div className="car">
              <img src={borne} alt="Station de recharge" />
            </div>

            <div className="details">
              <section className="distance">
                <p>Distance</p>
                <b>{distanceFromBorne}</b>
              </section>

              <section className="availability">
                <p>Disponibilité</p>
                <b>{borneDescription}</b>
                <p className="statut-available">{borneAvailable}</p>
              </section>

              <section className="time">
                <p>Temps d'utilisation</p>
                <b>⏱️ 2 jours</b>
              </section>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

export default Selection;

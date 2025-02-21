import Wire from "../../images/mini_icone_borne.png";
import "./banner.css";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCoordinates } from "../../contexts/EVStationContext.tsx";

function banner() {
  //--- This  functions check if there is available bornes
  const countAvailableBornes = useCallback(
    (available_bornesArray: boolean[], booleanType: boolean): number => {
      const count = available_bornesArray.filter(
        (borne) => Boolean(borne) === booleanType,
      ).length;
      return count;
    },
    [],
  );

  const isAvailable = useCallback(
    (available_bornesArray: boolean[]): boolean => {
      const resultAvailable = countAvailableBornes(available_bornesArray, true); // if borne id defined as 1 Check if there is at least one borne available.

      if (resultAvailable === available_bornesArray.length) return false; //"🔴 Non Disponible";

      return true; //"🟢 Disponible";
    },
    [countAvailableBornes],
  );

  //--- This  functions  if there is available bornes --- END

  const handleClickReservation = () => {
    try {
      fetch(`${import.meta.env.VITE_API_URL}/bookAborn`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_station: coordinatesOfCurrentStation?.id,
          available_bornes: true,
        }),
      }).then((res) => {
        if (res.status === 200) {
          toast.info("Votre borne a bien été réservée ! 😊");
        } else {
          toast.error(
            "Une erreur s'est produite, veuillez réessayer ou rafraîchir la page",
          );
        }

        res.json();
      });
    } catch (error) {
      console.error("Error reserving :", error);
    }
  };

  const { coordinatesOfCurrentStation } = useCoordinates();
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (coordinatesOfCurrentStation) {
      const { available_bornes } = coordinatesOfCurrentStation;

      const checkIfOneBorneRemainAtLeast = isAvailable(available_bornes); //true by default

      if (checkIfOneBorneRemainAtLeast) setAvailable(true);
      else setAvailable(false);
    }
  }, [coordinatesOfCurrentStation, isAvailable]);

  return (
    <>
      {coordinatesOfCurrentStation ? (
        <section className="banner">
          <img src={Wire} alt="Wire logo" className="WireImage" />

          {available ? <p> Réserver</p> : <p> Non Disponible</p>}

          <label
            className="switch"
            style={{ display: available ? "block" : "none" }}
          >
            <input type="checkbox" />
            <span className="sliderRound" />
          </label>

          <button
            className="ButtonReserv"
            type="submit"
            onClick={handleClickReservation}
            disabled={!available}
            style={{ display: available ? "block" : "none" }}
          >
            Valider
          </button>
        </section>
      ) : null}
    </>
  );
}

export default banner;

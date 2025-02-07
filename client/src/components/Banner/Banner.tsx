import Wire from "../../images/mini_icone_borne.png";
import "./banner.css";
import { useCallback, useEffect, useState } from "react";
import { useCoordinates } from "../../contexts/EVStationContext.tsx";

function banner() {
  //--- This check if there is available bornes
  const countAvailableBornes = useCallback(
    (available_bornesArray: boolean[], booleanType: boolean): number => {
      const count = available_bornesArray.filter(
        (borne) => Boolean(borne) === booleanType,
      ).length;
      return count;
    },
    [],
  );

  //function isAvailable (available_bornesArray : boolean[]) : boolean {
  const isAvailable = useCallback(
    (available_bornesArray: boolean[]): boolean => {
      const resultAvailable = countAvailableBornes(available_bornesArray, true); // if borne id defined as 1 Check if there is at least one borne available.

      if (resultAvailable === available_bornesArray.length) return false; //"🔴 Non Disponible";

      return true; //"🟢 Disponible";
    },
    [countAvailableBornes],
  );

  //--- This check if there is available bornes --- END

  //this function return the borne index in available_bornes []. when
  const defineWhichBorneIsAvailable = useCallback(
    (available_bornes: boolean[]): number => {
      let index = 0;

      while (index < available_bornes.length) {
        //console.log(available_bornes[index]);
        if (!available_bornes[index])
          // find at which index the borne is available and return its index
          return index;

        index++;
      }
      return index;
    },
    [],
  );

  const handleClickReservation = () => {
    try {
      fetch(`${import.meta.env.VITE_API_URL}/bookAborn`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //id_station: coordinatesOfCurrentStation?.id,
          id_station: borneToFetch,
          available_bornes: true,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error("Error reserving :", error);
    }
  };

  const { coordinatesOfCurrentStation } = useCoordinates();
  const [available, setAvailable] = useState(false);
  const [borneToFetch, setBorneToFetch] = useState(0);

  useEffect(() => {
    //console.log(coordinatesOfCurrentStation)
    if (coordinatesOfCurrentStation) {
      const { id_bornes, available_bornes } = coordinatesOfCurrentStation;

      const borneIndex = defineWhichBorneIsAvailable(available_bornes);
      setBorneToFetch(id_bornes[borneIndex]);

      //console.log("id_bornes", id_bornes);
      //console.log("available_bornes", available_bornes);
      //console.log("borneToFetch", borneToFetch);

      const checkIfOneBorneRemainAtLeast = isAvailable(available_bornes); //true by default

      if (checkIfOneBorneRemainAtLeast) setAvailable(true);
      else setAvailable(false);
    }
  }, [coordinatesOfCurrentStation, defineWhichBorneIsAvailable, isAvailable]);

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

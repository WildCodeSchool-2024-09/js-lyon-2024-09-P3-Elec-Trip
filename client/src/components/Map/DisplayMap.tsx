import type { LatLngTuple } from "leaflet";
import { useCallback, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { localisation } from "../../../../server/src/modules/stationLocation/stationLocationRepository";
import "./DisplayMap.css";
import "leaflet/dist/leaflet.css";
import type L from "leaflet";
import { useCoordinates } from "../../contexts/EVStationContext.tsx";
import LeafletIconsRegister from "./markerIconsOnmap.ts";

type ExtendedLocalisation = Omit<localisation, "coordinates"> & {
  id: number;
  coordinates: LatLngTuple; //location Latitude / Longitude
  id_bornes: number[];
  available_bornes: boolean[];
};

function LocationMarker() {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", (informationGeolocObject) => {
      setPosition(informationGeolocObject.latlng);
      map.flyTo(informationGeolocObject.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={LeafletIconsRegister.UserLocation}>
      <Popup>Vous êtes ici.</Popup>
    </Marker>
  );
}

function DisplayMap() {
  const [EVStationcoordinates, setEVStationCoordinates] = useState<
    ExtendedLocalisation[]
  >([]);
  const { setCoordinatesOfCurrentStation } = useCoordinates();
  const { location, setLocation } = useCoordinates();

  //this function get latitude & longitude from browser  and use it later to fetch / get stations around user
  const getCurrentLocationOfUser = useCallback((): Promise<
    [number, number]
  > => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) =>
            resolve([position.coords.latitude, position.coords.longitude]),
          (error) => reject(error),
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  }, []);

  const handleMarkerClick = (item: ExtendedLocalisation) => {
    setCoordinatesOfCurrentStation(item);
  };

  //this function parse available_bornes from fetch to define which icone to use form LeafletIconsRegister.
  function defineWhichIconToPick(available_bornes: boolean[]) {
    const count = available_bornes.filter((borne) => !borne).length;

    if (available_bornes.length === count) {
      return LeafletIconsRegister.stationLocationBlue;
    }

    if (count === 0) {
      return LeafletIconsRegister.stationLocationRed;
    }

    if (count <= available_bornes.length / 2) {
      return LeafletIconsRegister.stationLocationYellow;
    }
    // return a default icon if any condition is met. to prevent component to break while running.
    return LeafletIconsRegister.stationLocationBlue;
  }

  useEffect(() => {
    //this function fetch/get all satision Arround user location
    const returnAllStationsAroundUSer = async () => {
      try {
        const newLocation: [number, number] = await getCurrentLocationOfUser();
        setLocation(newLocation);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/EVstations/?latitude=${newLocation[0]}&longitude=${newLocation[1]}`,
        );
        const data = await response.json();
        setEVStationCoordinates(data);
      } catch (error) {
        console.error("Error fetching location or data:", error);
      }
    };

    returnAllStationsAroundUSer();
  }, [getCurrentLocationOfUser, setLocation]);

  return (
    <section>
      <MapContainer
        className="map"
        center={location} // Load map to Paris
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        {EVStationcoordinates.map((item) => (
          <Marker
            key={item.id}
            position={item.coordinates}
            icon={defineWhichIconToPick(item.available_bornes)}
            eventHandlers={{ click: () => handleMarkerClick(item) }}
          />
        ))}
        <LocationMarker />
      </MapContainer>
    </section>
  );
}

export default DisplayMap;

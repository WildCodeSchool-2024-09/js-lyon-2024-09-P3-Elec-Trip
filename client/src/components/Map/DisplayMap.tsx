import type { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import type { localisation } from "../../../../server/src/modules/stationLocation/stationLocationRepository";
import "./DisplayMap.css";
import "leaflet/dist/leaflet.css";

type ExtendedLocalisation = Omit<localisation, "coordinates"> & {
  coordinates: LatLngTuple;
};

function DisplayMap() {
  const [EVStationcoordinates, setEVStationCoordinates] = useState<
    ExtendedLocalisation[]
  >([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/EVstations`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data from API");
        }
        return response.json();
      })
      .then((data) => {
        setEVStationCoordinates(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MapContainer
      className="map"
      center={[48.866667, 2.333333]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      {EVStationcoordinates.map((item) => (
        <Marker key={item.id_station} position={item.coordinates} />
      ))}
    </MapContainer>
  );
}

export default DisplayMap;

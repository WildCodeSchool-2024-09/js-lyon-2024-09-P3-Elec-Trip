import type { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./DisplayMap.css";
import "leaflet/dist/leaflet.css";

interface EVStations {
  id: number;
  geocode: LatLngTuple;
}

function DisplayMap() {
  // Lattitude / longitude // 48.866667,2.333333
  // const position = [2.33, 48.8582];

  const [EVStationcoordinates, setEVStationCoordinates] = useState<
    EVStations[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3310/EVstations")
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
        <Marker key={item.id} position={item.geocode} />
      ))}
    </MapContainer>
  );
}

export default DisplayMap;

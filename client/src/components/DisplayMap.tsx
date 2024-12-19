import type { LatLngTuple } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./DisplayMap.css";
import "leaflet/dist/leaflet.css";

const EVStation: { id: number; geocode: LatLngTuple }[] = [
  {
    id: 1,
    geocode: [48.86663, 2.3334],
  },
  {
    id: 2,
    geocode: [48.8664, 2.3337],
  },
  {
    id: 3,
    geocode: [48.8673, 2.3456],
  },
];

function DisplayMap() {
  // Lattitude / longitude // 48.866667,2.333333
  // const position = [2.33, 48.8582];

  return (
    <MapContainer
      center={[48.866667, 2.333333]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {EVStation.map((item) => (
        <Marker key={item.id} position={item.geocode} />
      ))}
    </MapContainer>
  );
}

export default DisplayMap;

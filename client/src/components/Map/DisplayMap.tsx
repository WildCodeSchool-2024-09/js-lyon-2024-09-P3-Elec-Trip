import type { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./DisplayMap.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { icon } from "./constant";

interface EVStations {
  id: number;
  geocode: LatLngTuple;
}

function LocationMarker() {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const [bbox, setBbox] = useState<string[]>([]);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>
        Vous êtes ici. <br />
        Coordonnées de la carte : <br />
        <b>Sud-ouest lng</b>: {bbox[0]} <br />
        <b>Sud-ouest lat</b>: {bbox[1]} <br />
        <b>Nord-est lng</b>: {bbox[2]} <br />
        <b>Nord-est lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
}

function DisplayMap() {
  const [EVStationcoordinates, setEVStationCoordinates] = useState<
    EVStations[]
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
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      {EVStationcoordinates.map((item) => (
        <Marker key={item.id} position={item.geocode} />
      ))}
      <LocationMarker />
    </MapContainer>
  );
}

export default DisplayMap;

import type { LatLngTuple } from "leaflet";
import { useCallback, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { localisation } from "../../../../server/src/modules/stationLocation/stationLocationRepository";
import "./DisplayMap.css";
import "leaflet/dist/leaflet.css";
import type L from "leaflet";
import { icon } from "./constant";

type ExtendedLocalisation = Omit<localisation, "coordinates"> & {
  id: number;
  coordinates: LatLngTuple;
};

type location = [number, number];

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
    <Marker position={position} icon={icon}>
      <Popup>
        Vous êtes ici. <br />
      </Popup>
    </Marker>
  );
}

function DisplayMap() {
  const [EVStationcoordinates, setEVStationCoordinates] = useState<
    ExtendedLocalisation[]
  >([]);
  const [location, setLocation] = useState<location>([48.866667, 2.333333]); //load in Paris

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

  useEffect(() => {
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
  }, [getCurrentLocationOfUser]);

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
          <Marker key={item.id} position={item.coordinates} />
        ))}
        <LocationMarker />
      </MapContainer>
    </section>
  );
}

export default DisplayMap;

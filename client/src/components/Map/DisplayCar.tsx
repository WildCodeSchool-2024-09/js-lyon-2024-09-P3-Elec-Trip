import type { LatLngTuple } from "leaflet";
import { useCallback, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./DisplayCar.css";
import "leaflet/dist/leaflet.css";
import type L from "leaflet";
import LeafletIconsRegister from "./markerIconsOnmap.ts";

type location = [number, number];

interface carCollection {
  car_id: string;
  model: string;
  location: LatLngTuple;
  battery_level: number;
  is_available: boolean;
}

const carCollection: carCollection[] = [
  {
    car_id: "LYN-2eArr-0001",
    model: "BMW iX",
    location: [45.746123, 4.826247], // Rue Delandine (près du restaurant Le Delandine 1826)
    battery_level: 15,
    is_available: false,
  },
  {
    car_id: "LYN-2eArr-0002",
    model: "Audi e-tron GT",
    location: [45.745872, 4.825612], // Cours Bayard (intersection avec rue Delandine)
    battery_level: 63,
    is_available: false,
  },
  {
    car_id: "LYN-2eArr-0003",
    model: "Volkswagen ID.4",
    location: [45.744981, 4.826731], // Quai Rambaud (près de La Sucrière)
    battery_level: 84,
    is_available: true,
  },
  {
    car_id: "LYN-2eArr-0004",
    model: "BMW iX",
    location: [45.745234, 4.824892], // Cours Charlemagne (près du centre commercial Confluence)
    battery_level: 37,
    is_available: true,
  },
  {
    car_id: "LYN-2eArr-0005",
    model: "BMW iX",
    location: [45.744756, 4.825478], // Rue Casimir Périer (près du Musée des Confluences)
    battery_level: 77,
    is_available: false,
  },
];

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
  const [location, setLocation] = useState<location>([48.866667, 2.333333]);
  const [coordinatesOfCar, setCoordinatesOfCar] = useState<carCollection[]>([]);

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

  /*
  const handleMarkerClick = (item: carCollection) => {
    setCoordinatesOfCar(item);
  };
*/

  useEffect(() => {
    const returnAllStationsAroundUser = async () => {
      try {
        const newLocation = await getCurrentLocationOfUser();
        setLocation(newLocation);
        setCoordinatesOfCar(carCollection);
      } catch (error) {
        console.error("Error fetching location or data:", error);
      }
    };

    returnAllStationsAroundUser();
  }, [getCurrentLocationOfUser]);

  return (
    <section>
      <MapContainer
        className="map"
        center={location}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        {coordinatesOfCar.map((item) => (
          <Marker
            key={item.car_id}
            position={item.location}
            icon={LeafletIconsRegister.carLocation}
            //eventHandlers={{ click: () => handleMarkerClick(item) }}
          />
        ))}
        <LocationMarker />
      </MapContainer>
    </section>
  );
}

export default DisplayMap;

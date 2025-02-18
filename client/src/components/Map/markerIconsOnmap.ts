import L from "leaflet";

const LeafletIconsRegister = {
  UserLocation: new L.Icon({
    iconUrl: "/marker_you-are-here.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  }),

  stationLocationBlue: new L.Icon({
    iconUrl: "/marker_station_blue.png",
    iconSize: [39, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [25, 25],
  }),

  stationLocationRed: new L.Icon({
    iconUrl: "/marker_station_red.png",
    iconSize: [39, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [25, 25],
  }),

  stationLocationYellow: new L.Icon({
    iconUrl: "/marker_station_yellow.png",
    iconSize: [39, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [25, 25],
  }),
};

export default LeafletIconsRegister;

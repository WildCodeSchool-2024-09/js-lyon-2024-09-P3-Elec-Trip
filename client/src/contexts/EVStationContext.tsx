import type { LatLngTuple } from "leaflet";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface CoordinatesContex {
  coordinatesOfCurrentStation: coordinatesOfCurrentStation | null;
  setCoordinatesOfCurrentStation: React.Dispatch<
    React.SetStateAction<coordinatesOfCurrentStation | null>
  >;
  location: location;
  setLocation: React.Dispatch<React.SetStateAction<location>>;
}

interface coordinatesOfCurrentStation {
  id: number;
  id_station: string;
  n_station: string;
  ad_station: string;
  ylatitude: string;
  nbre_pdc: number;
  acces_recharge: string;
  puiss_max: number;
  type_prise: string;
  coordinates: LatLngTuple;
  id_bornes: number[];
  available_bornes: boolean[];
}

//location Latitude / Longitude
type location = [number, number];

const ToCoordinatesContexContext = createContext<CoordinatesContex | null>(
  null,
);

export function CoordinatesProvider({ children }: ContextProviderProps) {
  const [coordinatesOfCurrentStation, setCoordinatesOfCurrentStation] =
    useState<coordinatesOfCurrentStation | null>(null);
  const [location, setLocation] = useState<location>([48.866667, 2.333333]); //load in Paris

  return (
    <ToCoordinatesContexContext.Provider
      value={{
        coordinatesOfCurrentStation,
        setCoordinatesOfCurrentStation,
        location,
        setLocation,
      }}
    >
      {children}
    </ToCoordinatesContexContext.Provider>
  );
}

export const useCoordinates = () => {
  const value = useContext(ToCoordinatesContexContext);
  if (value == null) {
    throw new Error("useTheme has to be used within <ThemeProvider>");
  }
  return value;
};

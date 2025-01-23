import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

type localisation = {
  id_station: string;
  n_station: string;
  ad_station: string;
  coordinates: [xlongitude: number, ylatitude: number];
  ylatitude: string;
  nbre_pdc: number;
  acces_recharge: string;
  puiss_max: number;
  type_prise: string;
};

type catchQueryParameters = { latitude: string; longitude: string };

class stationLocalisationRepository {
  async DefinePerimetersArroundUserLocation(
    catchQueryParameters: catchQueryParameters,
  ) {
    const { latitude, longitude } = catchQueryParameters;
    const equivalentOneKilometer = 0.00899; // equivalent of +1km around latitude or longitude
    const increaseLatitudeToNorth =
      Number.parseFloat(latitude) + equivalentOneKilometer * 10;
    const increaseLatitudeToSouth =
      Number.parseFloat(latitude) - equivalentOneKilometer * 10;
    const increaseLongitudeToEast =
      Number.parseFloat(longitude) + equivalentOneKilometer * 10;
    const increaseLongitudeToWest =
      Number.parseFloat(longitude) - equivalentOneKilometer * 10;

    const coordinatesObject = {
      LatitudeNorth: increaseLatitudeToNorth,
      LatitudeSouth: increaseLatitudeToSouth,
      longitudeEast: increaseLongitudeToEast,
      longitudeWest: increaseLongitudeToWest,
    };

    return coordinatesObject;
  }

  async createCoordinatesEntry(sqlQuerryResult: Rows) {
    //This function simply rewrite object paramter to create on entry with both(xlongitude,ylatitude).

    let index = 0;

    while (Object.values(sqlQuerryResult)[index]) {
      Object.values(sqlQuerryResult)[index].coordinates = [
        Object.values(sqlQuerryResult)[index].ylatitude,
        Object.values(sqlQuerryResult)[index].xlongitude,
      ];

      Object.values(sqlQuerryResult)[index].xlongitude = undefined;
      Object.values(sqlQuerryResult)[index].ylatitude = undefined;

      index++;
    }

    return sqlQuerryResult;
  }

  async getStationLocalisation(catchQueryParameters: catchQueryParameters) {
    const querryCoords =
      await this.DefinePerimetersArroundUserLocation(catchQueryParameters);

    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM station WHERE ylatitude BETWEEN ? AND ? AND xlongitude BETWEEN ? AND ? LIMIT 500",
      [
        querryCoords.LatitudeSouth,
        querryCoords.LatitudeNorth,
        querryCoords.longitudeWest,
        querryCoords.longitudeEast,
      ],
    );

    await this.createCoordinatesEntry(rows);
    return rows as localisation[];
  }
}

export default new stationLocalisationRepository();
export type { localisation };

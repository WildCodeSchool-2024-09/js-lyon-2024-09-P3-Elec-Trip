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

class stationLocalisationRepository {
  async createCoordinatesEntry(sqlQuerryResult: Rows) {
    //This function simply rewrite object paramter to create on entry with both(xlongitude,ylatitude).

    let index = 0;

    while (Object.values(sqlQuerryResult)[index]) {
      Object.values(sqlQuerryResult)[index].coordinates = [
        Object.values(sqlQuerryResult)[index].xlongitude,
        Object.values(sqlQuerryResult)[index].ylatitude,
      ];

      Object.values(sqlQuerryResult)[index].xlongitude = undefined;
      Object.values(sqlQuerryResult)[index].ylatitude = undefined;

      index++;
    }

    return sqlQuerryResult;
  }

  async getStationLocalisation() {
    const [rows] = await databaseClient.query<Rows>("select * from station");
    await this.createCoordinatesEntry(rows);

    return rows as localisation[];
  }
}

export default new stationLocalisationRepository();
export type { localisation };

import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type localisation = {
    id_station : string;
    n_station : string;
    ad_station : string;
    xlongitude : number;
    ylatitude : string;
    nbre_pdc : number;
    acces_recharge : string;
    puiss_max : number;
    type_prise : string;
}

class stationLocalisationRepository {

    async getStationLocalisation()
    {
        const [rows] = await databaseClient.query<Rows>("select * from item");

        return rows as localisation[];
    }
}

export default new stationLocalisationRepository();
import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Bornes = {
  id: number;
  id_station: string;
  station_id: number;
  available: number;
};

class BookABornesRepository {
  async returnBorneID(array: Rows) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].available === 0) {
        return array[i].id;
      }
    }
    return -1;
  }

  async update(id_station: number, available_bornes: boolean) {
    const [searchBornes] = await databaseClient.query<Rows>(
      "SELECT * FROM bornes WHERE station_id = ?",
      [id_station],
    );

    const borneIdToBook = await this.returnBorneID(searchBornes);

    if (borneIdToBook === -1) throw new Error("Invalid parameters");
    // console.log("l'id de la borne : ", borneIdToBook);

    const [result] = await databaseClient.query<Result>(
      "UPDATE bornes SET available = ? where id = ?",
      [available_bornes, borneIdToBook],
    );

    // console.log('le result :')
    // console.log(result)
    return result.affectedRows;
  }
}

export default new BookABornesRepository();

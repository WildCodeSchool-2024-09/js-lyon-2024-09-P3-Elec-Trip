import type { RequestHandler } from "express";
import stationLocalisationRepository from "./stationLocationRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const stationsLocation =
      await stationLocalisationRepository.getStationLocalisation();

    res.json(stationsLocation);
  } catch (err) {
    next(err);
  }
};

export default { browse };

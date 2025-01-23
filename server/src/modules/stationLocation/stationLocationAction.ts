import type { RequestHandler } from "express";
import stationLocalisationRepository from "./stationLocationRepository";

type catchQueryParameters = { latitude: string; longitude: string };

const browse: RequestHandler = async (req, res, next) => {
  try {
    const catchQueryParameters: catchQueryParameters =
      req.query as catchQueryParameters;

    const stationsLocation =
      await stationLocalisationRepository.getStationLocalisation(
        catchQueryParameters,
      );

    res.json(stationsLocation);
  } catch (err) {
    next(err);
  }
};

export default { browse };

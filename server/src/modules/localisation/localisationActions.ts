import type { RequestHandler } from "express";
import type { LatLngTuple } from "leaflet";

const EVStation: { id: number; geocode: LatLngTuple }[] = [
    {
      id: 1,
      geocode: [48.86663, 2.3334],
    },
    {
      id: 2,
      geocode: [48.8664, 2.3337],
    },
    {
      id: 3,
      geocode: [48.8673, 2.3456],
    },
  ];

  const browse: RequestHandler = async (req, res, next) => {
    try {

      const items = EVStation; // think to add connection to sql database
  
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };

  export default {browse};
import type { RequestHandler } from "express";
import BookABornesRepository from "./BookABornesRepository";

const edit: RequestHandler = async (req, res, next) => {
  try {
    const { id_station, available_bornes } = req.body;

    const affectedRows = await BookABornesRepository.update(
      id_station,
      available_bornes,
    );

    if (affectedRows === 1) {
      res.status(200).json({ msg: "modification bien effectué" });
    } else {
      res.status(404).json({ msg: "requête invalide" });
    }
  } catch (err) {
    next(err);
  }
};

export default { edit };

import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import accountRepository from "./accountRepository";

// creation de compte
const add: RequestHandler = async (req, res, next) => {
  try {
    const newAccount = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
    };

    const insertId = await accountRepository.create(newAccount);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// connexion au compte
const edit: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await accountRepository.findByEmail(email);

    if (!user) {
      res.status(401).json({ error: "Identifiants incorrects" });
    }

    res.status(200).json({ message: "Connexion réussie", user });
  } catch (err) {
    next(err);
  }
};

export default { add, edit };

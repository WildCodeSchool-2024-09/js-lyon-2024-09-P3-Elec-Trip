import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import accountRepository from "./accountRepository";

// creation de compte
const add: RequestHandler = async (req, res, next) => {
  try {
    const newAccount = {
      firstname: req.body.accountForm.firstname,
      lastname: req.body.accountForm.lastname,
      email: req.body.accountForm.email,
      password: req.body.accountForm.password,
    };

    const insertId = await accountRepository.create(newAccount);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// connexion au compte
const edit: RequestHandler = async (req, res, next) => {
  // code
};

export default { edit };

import argon2 from "argon2";
import type { RequestHandler } from "express";
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

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

// connexion au compte
const edit: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await accountRepository.findByEmailAndPassword(
      email,
      password,
    );

    if (!user) {
      res.status(401).json({ error: "Identifiants incorrects" });
    }

    res.status(200).json({ message: "Connexion réussie", user });
  } catch (err) {
    next(err);
  }
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    const password = req.body.password;
    const hashedPassword = argon2.hash(password, hashingOptions);
    req.body.hashedPassword = hashedPassword;
    req.body.password = undefined;
    next();
  } catch (err) {
    next(err);
  }
};

export default { add, edit };

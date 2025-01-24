import type { RequestHandler } from "express";
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

export default { add, edit };

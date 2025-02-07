import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

import accountRepository from "../account/accountRepository";

interface MyPayload extends JwtPayload {
  email: string;
}

export const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const login: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await accountRepository.findByEmail(email);

    if (!user) {
      res.status(401).json({ error: "Identifiants incorrects" });
      return;
    }

    const isPasswordValid = await argon2.verify(user.hashed_password, password);

    if (!isPasswordValid) {
      res.status(401).json({ error: "Identifiants incorrects" });
      return;
    }

    const token = jwt.sign(
      { email: user.email },
      process.env.APP_SECRET as string,
      { expiresIn: "1h" },
    );

    res.status(200).json({
      message: "Connexion réussie",
      token,
      user: {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      },
    });
  } catch (err) {
    next(err);
  }
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.hashed_password = hashedPassword;

    req.body.password = undefined;

    next();
  } catch (err) {
    next(err);
  }
};

interface MyPayload {
  userId: string;
  // Ajoute ici d'autres propriétés si nécessaire
}

const verifyToken: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      res.status(401).json({ message: "En-tête Authorization manquant" });
      return;
    }

    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      res.status(401).json({ message: "Type d'autorisation invalide" });
      return;
    }

    const decodedToken = jwt.verify(
      token,
      process.env.APP_SECRET as string,
    ) as MyPayload;

    req.body.auth = decodedToken;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Token invalide" });
    return;
  }
};

export default { login, hashPassword, verifyToken };

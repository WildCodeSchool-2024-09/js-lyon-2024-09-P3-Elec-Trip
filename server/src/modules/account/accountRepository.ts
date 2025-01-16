import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

type Account = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

type user = {
  email: string;
  password: string;
};
const fakeuser = {
  email: "oliver@pepette.com",
  password: "norefund",
};

class accountRepository {
  // Creation du compte
  async create(account: Omit<Account, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user_account (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
      [account.firstname, account.lastname, account.email, account.password],
    );

    return result.insertId;
  }
  // Connexion au compte
  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<user | null> {
    const [result] = await databaseClient.query<Result>(
      "SELECT * FROM user_account WHERE email = ? AND password = ?",
      [email, password],
    );
    console.info(result);

    if (Array.isArray(result) && result.length > 0) {
      return result[0] as Account;
    }

    return null;
  }
}

export default new accountRepository();

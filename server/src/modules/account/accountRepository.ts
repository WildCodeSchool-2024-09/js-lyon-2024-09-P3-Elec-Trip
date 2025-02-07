import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Account = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  hashed_password: string;
};

// pour créer son compte
class accountRepository {
  async create(account: Omit<Account, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user_account (firstname, lastname, email, hashed_password) VALUES (?, ?, ?, ?)",
      [
        account.firstname,
        account.lastname,
        account.email,
        account.hashed_password,
      ],
    );

    return result.insertId;
  }

  // pour se connecter
  async findByEmail(email: string) {
    const [result] = await databaseClient.query<Rows>(
      "SELECT * FROM user_account WHERE email = ?",
      [email],
    );

    return result[0] as Account;
  }
}

export default new accountRepository();

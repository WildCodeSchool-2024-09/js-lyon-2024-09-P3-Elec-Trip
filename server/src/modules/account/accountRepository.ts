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

class accountRepository {
  async create(account: Omit<Account, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user_account (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
      [account.firstname, account.lastname, account.email, account.password],
    );

    return result.insertId;
  }

  //pour se connecter
  async findByEmailAndPassword(email: string): Promise<user | null> {
    const [result] = await databaseClient.query<Result>(
      "SELECT * FROM user_account WHERE email = ?",
      [email],
    );
    console.info(result);

    if (Array.isArray(result) && result.length > 0) {
      return result[0] as Account;
    }

    return null;
  }
}

export default new accountRepository();

import { connect, connection } from "mongoose";

const db_connection = {
  connect: (DB_HOST: string) => connect(DB_HOST),
  close: () => connection.close(),
}

export default db_connection;
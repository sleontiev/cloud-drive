import { connect, connection } from "mongoose";

const dbConnect = {
  connect: (DB_HOST: string) => connect(DB_HOST),
  close: () => connection.close(),
}

export default dbConnect;
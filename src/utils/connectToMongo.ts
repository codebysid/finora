import { connect, connection } from "mongoose";

export default async function connectToMongo() {
  if (connection.readyState >= 1) {
    return;
  }
  await connect(process.env.MONGODB_URI as string);
}

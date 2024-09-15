import { connect } from "mongoose";

export default async function connectToMongo() {
  await connect(process.env.MONGODB_URI as string);
}

import mongoose from "mongoose";
import "dotenv/config";

const mongoUser = process.env.MONGODB_USER;
const mongoPW = process.env.MONGODB_PW;
const mongoDB = process.env.MONGODB_NAME;
const remoteAddress = `mongodb+srv://${mongoUser}:${mongoPW}@cluster0.lwx4ahm.mongodb.net/${mongoDB}?retryWrites=true&w=majority&appName=Cluster0`;

const localDBConnection = async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${mongoDB}`);
};

const remoteDBConnection = async () => {
  await mongoose.connect(remoteAddress);
};

/**
 * databast connection
 * @param {string} access - Setup connection to remote or local
 */
export const mongoDBConnection = (access) => {
  const dbConnetion =
    access === "local"
      ? localDBConnection
      : access === "remote"
      ? remoteDBConnection
      : null;

  if (!dbConnetion) {
    console.error("Could not coonect to database cause invaild access value.");
    return;
  }

  dbConnetion()
    .then(() => {
      console.log("Database is connected!");
    })
    .catch((err) => console.log(err));
};

export default mongoDBConnection;

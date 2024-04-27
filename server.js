import http from "http";
import "dotenv/config";
import { PORT } from "./constants.js";
import mongoose from "mongoose";
import errorHandler from "./libs/errorHandler.js";
import successHandler from "./libs/successHandler.js";

const isLocalConnection = true;

const mongoUser = process.env.MONGODB_USER;
const mongoPW = process.env.MONGODB_PW;
const mongoDB = process.env.MONGODB_NAME;
const remoteAddress = `mongodb+srv://${mongoUser}:${mongoPW}@cluster0.lwx4ahm.mongodb.net/${mongoDB}?retryWrites=true&w=majority&appName=Cluster0`;

// console.log(remoteAddress);

const localDBConnection = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
};

const remoteDBConnection = async () => {
  await mongoose.connect(remoteAddress);
};

const dbConnetion = isLocalConnection ? localDBConnection : remoteDBConnection;

dbConnetion()
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => console.log(err));

const posts = [];

const server = http.createServer((req, res) => {
  // const { url, method } = req;
  // if (method === "OPTIONS") {
  //   successHandler(res, 200, posts, true);
  // }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

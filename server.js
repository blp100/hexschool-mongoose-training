import http from "http";
import { PORT } from "./constants.js";
import mongoose from "mongoose";
import errorHandler from "./libs/errorHandler.js";
import successHandler from "./libs/successHandler.js";

const server = http.createServer((req, res) => {

});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



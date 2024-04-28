import http from "http";
import "dotenv/config";
// import { PORT } from "./constants.js";
import mongoose from "mongoose";
import errorHandler from "./libs/errorHandler.js";
import successHandler from "./libs//successHandler.js";
import PostModel from "./model/PostModel.js";

const PORT = process.env.PORT || 3005;
const isLocalConnection = false;

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

const dbConnetion = isLocalConnection ? localDBConnection : remoteDBConnection;

dbConnetion()
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((err) => console.log(err));

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  if (url === "/posts" && method === "GET") {
    const posts = await PostModel.find();
    successHandler(res, 200, posts);
  } else if (url === "/posts" && method === "POST") {
    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        // Implement Mongoose's built-in data validation;
        // Find more details in PostModel.js.
        const newPost = await PostModel.create(data);

        successHandler(res, 200, [newPost]);
      } catch (er) {
        // Chheck all errors in this part
        if (er.name === "ValidationError") {
          // Extract validation error messages
          const errorMessages = Object.values(er.errors).map(
            (err) => err.message
          );
          errorHandler(res, 400, errorMessages.join(", "));
        } else {
          errorHandler(res, 400, er.message);
        }
      }
    });
  } else if (url === "/posts" && method === "DELETE") {
    await PostModel.deleteMany({});
    successHandler(res, 200, null);
  } else if (url.startsWith("/posts/") && method === "DELETE") {
    const postId = url.split("/").pop();
    try {
      const deletedPost = await PostModel.findByIdAndDelete(postId);
      if (!deletedPost) {
        errorHandler(res, 400, "No post found with the specified ID");
      } else {
        successHandler(res, 200, [deletedPost]);
      }
    } catch (er) {
      errorHandler(res, 400, er.message);
    }
  } else if (url.startsWith("/posts/") && method === "PATCH") {
    const postId = url.split("/").pop();
    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        // updatedPost is the post after `update` was applied because of
        // `new: true`
        const updatedPost = await PostModel.findByIdAndUpdate(postId, data, {
          new: true,
          runValidators: true,
        });

        if (!updatedPost) {
          errorHandler(res, 404, "Post not found");
          return;
        }
        successHandler(res, 200, updatedPost);
      } catch (er) {
        if (er.name === "ValidationError") {
          const invalidField = Object.keys(er.errors)[0];
          errorHandler(res, 400, `${invalidField} is not a valid field`);
        } else {
          errorHandler(res, 400, er.message);
        }
      }
    });
  } else if (method === "OPTIONS") {
    successHandler(res, 200, posts, true);
  } else {
    errorHandler(res, 404, "No router instance found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

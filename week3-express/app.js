import createError from "http-errors";
import express, { json, urlencoded } from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import postRouter from "./routes/post.js";
import postsRouter from "./routes/posts.js";
import mongoDBConnection from "./connections/mongoDBConnection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// mongoDBConnection("local");
mongoDBConnection("remote");

// setup CORS
app.use(cors());

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// setup route
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/post", postRouter);
app.use("/posts", postsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // check if headers are already sent
  if (res.headersSent) {
    return next(err);
  }

  // send JSON response
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

export default app;

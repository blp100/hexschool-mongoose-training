const errorHandler = (res, statusCode, msg = "") => {
  res.status(statusCode).send({
    status: "failed",
    message: msg,
  });
  res.end();
};

export default errorHandler;

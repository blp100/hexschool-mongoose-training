const errorHandler = (res, msg = "") => {
  res.send(
    JSON.stringify({
      status: "failed",
      message: msg,
    })
  );
  res.end();
};

export default errorHandler;

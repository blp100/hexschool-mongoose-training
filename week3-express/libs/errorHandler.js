import { HEADERS } from "../constants.js";

const errorHandler = (res, resCode, msg = "") => {
  res.writeHead(resCode, HEADERS);
  res.write(
    JSON.stringify({
      status: "failed",
      message: msg,
    })
  );
  res.end();
};

export default errorHandler;

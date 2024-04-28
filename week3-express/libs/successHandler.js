import { HEADERS } from "../constants.js";

const successHandler = (res, resCode = 200, data, corsOption = false) => {
  res.writeHead(resCode, HEADERS);
  if (!corsOption) {
    res.write(
      JSON.stringify({
        status: "success",
        data,
      })
    );
  }
  res.end();
};

export default successHandler;
const successHandler = (res, resCode = 200, todoData, corsOption = false) => {
  res.writeHead(resCode, HEADERS);
  if (!corsOption) {
    res.write(
      JSON.stringify({
        status: "success",
        data: todoData,
      })
    );
  }
  res.end();
};

export default successHandler;
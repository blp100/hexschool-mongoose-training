const successHandler = (res, data) => {
  res.send({
    status: "success",
    data,
  });
  res.end();
};

export default successHandler;

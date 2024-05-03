import UserModel from "../models/UserModel.js";
import successHandler from "../libs/successHandler.js";
import errorHandler from "../libs/errorHandler.js";

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    successHandler(res,users);
  } catch (er) {
    errorHandler(res, 400, er.message);
  }
};

export { getUsers };

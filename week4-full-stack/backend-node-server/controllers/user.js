import UserModel from "../models/UserModel.js";
import successHandler from "../libs/successHandler.js";
import errorHandler from "../libs/errorHandler.js";

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      errorHandler(res, 400, "User not found");
    } else {
      successHandler(res, [user]);
    }
  } catch (er) {
    errorHandler(res, 400, er.message);
  }
};

export { getUser };

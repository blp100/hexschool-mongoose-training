import PostModel from "../models/PostModel.js";
import successHandler from "../libs/successHandler.js";
import errorHandler from "../libs/errorHandler.js";

const getPosts = async (req, res) => {
  const timeSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt";
  // const q =
  //   req.query.q !== undefined ? { content: new RegExp(req.query.q) } : {};
  const posts = await PostModel.find()
    .populate({
      path: "user",
      select: "name photo",
    })
    .sort(timeSort);
  successHandler(res, posts);
};

const deletePosts = async (req, res) => {
  const posts = await PostModel.deleteMany({});
  successHandler(res, null);
};

export { getPosts, deletePosts };

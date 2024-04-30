import PostModel from "../models/PostModel.js";
import successHandler from "../libs/successHandler.js";
import errorHandler from "../libs/errorHandler.js";

const getPosts = async (req, res) => {
  const posts = await PostModel.find();
  successHandler(res, posts);
};

const deletePosts = async (req, res) => {
  const posts = await PostModel.deleteMany({});
  successHandler(res, null);
};

export { getPosts, deletePosts };

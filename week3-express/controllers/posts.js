import PostModel from "../models/PostModel.js";
import successHandler from "../libs/successHandler.js";

const getPosts = async (req, res) => {
  const posts = await PostModel.find();
  successHandler(res, posts);
};

export { getPosts };

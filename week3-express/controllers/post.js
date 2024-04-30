import PostModel from "../models/PostModel.js";
import successHandler from "../libs/successHandler.js";
import errorHandler from "../libs/errorHandler.js";

const createPost = async (req, res) => {
  const data = req.body;
  try {
    const newPost = await PostModel.create(data);
    successHandler(res, [newPost]);
  } catch (er) {
    if (er.name === "ValidationError") {
      const errorMessages = Object.values(er.errors).map((err) => err.message);
      errorHandler(res, 400, errorMessages.join(", "));
    } else {
      errorHandler(res, 400, er.message);
    }
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await PostModel.findByIdAndDelete(id);
    if (!deletedPost) {
      errorHandler(res, 400, "No post found with the specified ID");
    } else {
      successHandler(res, [deletedPost]);
    }
  } catch (er) {
    errorHandler(res, 400, er.message);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) {
      errorHandler(res, 404, "Post not found");
      return;
    }
    successHandler(res, updatedPost);
  } catch (er) {
    if (er.name === "ValidationError") {
      const invalidField = Object.keys(er.errors)[0];
      errorHandler(res, 400, `${invalidField} is not a valid field`);
    } else {
      errorHandler(res, 400, er.message);
    }
  }
};

export { createPost, deletePost, updatePost };

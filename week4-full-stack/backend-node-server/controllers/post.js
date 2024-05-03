import PostModel from "../models/PostModel.js";
import successHandler from "../libs/successHandler.js";
import errorHandler from "../libs/errorHandler.js";
// import multer from "multer";

// setup Multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/images/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// const limits = { fileSize: 10485760 };

// const upload = multer({ storage, limits }).single("image");

const createPost = async (req, res) => {
  try {
    const data = req.body;
    const newPost = await PostModel.create(data);
    successHandler(res, [newPost]);

    /* this part is write for multer,
     * but i can't built-up free plan on Render
     */

    // upload(req, res, async function (err) {
    //   if (err) {
    //     console.error("Error uploading image:", err);
    //     return res.status(500).json({ error: "Error uploading image" });
    //   }

    //   const data = req.body;
    //   const imagePath = req.file ? "images/" + req.file.filename : "";
    //   data.image = imagePath;
    //   const newPost = await PostModel.create(data);
    //   successHandler(res, [newPost]);
    // });
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

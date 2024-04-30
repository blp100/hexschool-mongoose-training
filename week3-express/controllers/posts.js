import PostModel from "../models/PostModel.js";
import successHandler from "../libs/successHandler.js";
import errorHandler from "../libs/errorHandler.js";

const getPosts = async (req, res) => {
  const posts = await PostModel.find();
  successHandler(res, posts);
};

const createPost = async (req, res) => {
  const data = req.body;
  try {
    const newPost = await PostModel.create(data);
    successHandler(res, [newPost]);
  } catch (er) {
    // Chheck all errors in this part
    if (er.name === "ValidationError") {
      // Extract validation error messages
      const errorMessages = Object.values(er.errors).map((err) => err.message);
      errorHandler(res, 400, errorMessages.join(", "));
    } else {
      errorHandler(res, 400, er.message);
    }
  }
};
//   } else if (url === "/posts" && method === "DELETE") {
//     await PostModel.deleteMany({});
//     successHandler(res, 200, null);
//   } else if (url.startsWith("/posts/") && method === "DELETE") {
//     const postId = url.split("/").pop();
//     try {
//       const deletedPost = await PostModel.findByIdAndDelete(postId);
//       if (!deletedPost) {
//         errorHandler(res, 400, "No post found with the specified ID");
//       } else {
//         successHandler(res, 200, [deletedPost]);
//       }
//     } catch (er) {
//       errorHandler(res, 400, er.message);
//     }
//   } else if (url.startsWith("/posts/") && method === "PATCH") {
//     const postId = url.split("/").pop();
//     req.on("end", async () => {
//       try {
//         const data = JSON.parse(body);

//         // updatedPost is the post after `update` was applied because of
//         // `new: true`
//         const updatedPost = await PostModel.findByIdAndUpdate(postId, data, {
//           new: true,
//           runValidators: true,
//         });

//         if (!updatedPost) {
//           errorHandler(res, 404, "Post not found");
//           return;
//         }
//         successHandler(res, 200, updatedPost);
//       } catch (er) {
//         if (er.name === "ValidationError") {
//           const invalidField = Object.keys(er.errors)[0];
//           errorHandler(res, 400, `${invalidField} is not a valid field`);
//         } else {
//           errorHandler(res, 400, er.message);
//         }
//       }
//     });
//   } else if (method === "OPTIONS") {
//     successHandler(res, 200, posts, true);
//   } else {
//     errorHandler(res, 404, "No router instance found");
//   }

export { getPosts, createPost };

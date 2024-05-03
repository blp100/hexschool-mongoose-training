import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "user",
      trim: true,
      required: [true, "Post name not filled"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    content: {
      type: String,
      trim: true,
      required: [true, "Content not filled"],
    },
    image: {
      type: String,
      default: "",
    },
    // tags: {
    //   type: [
    //     {
    //       type: String,
    //       trim: true,
    //       required: [true, "Post tags not filled"],
    //     },
    //   ],
    //   validate: {
    //     validator: (tags) => {
    //       return tags.length > 0;
    //     },
    //     message: "Post tags must contain at least one element.",
    //   },
    //   required: [true, "Post tags not filled"],
    // },
    // type: {
    //   type: String,
    //   enum: ["group", "person"],
    //   required: [true, "Post type not filled"],
    // },
    // likes: {
    //   type: Number,
    //   default: 0,
    // },
    // comments: {
    //   type: Number,
    //   default: 0,
    // },
  },
  { versionKey: false }
);

const PostModel = model("post", postSchema);

export default PostModel;

import { Schema, model } from "mongoose";

const postsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Post name not filled"],
    },
    tags: {
      type: [
        {
          type: String,
          required: [true, "Post tags not filled"],
        },
      ],
      /*
      The original validate function didn't work on objects and arrays, 
      so I've added a custom validation function here. For more details, 
      please refer to: https://mongoosejs.com/docs/validation.html
      */
      validate: {
        validator: (tags) => {
          return tags.length > 0;
        },
        message: "Post tags must contain at least one element.",
      },
      required: [true, "Post tags not filled"],
    },
    type: {
      type: String,
      enum: ["group", "person"],
      required: [true, "Post type not filled"],
    },
    image: {
      type: String,
      default: "",
    },
    createAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    content: {
      type: String,
      required: [true, "Content not filled"],
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

const PostModel = model("post", postsSchema);

export default PostModel;

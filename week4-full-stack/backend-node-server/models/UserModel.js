import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
    select: false,
  },
  photo: String,
});

const UserModel = model("user", userSchema);

export default UserModel;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      // unique: true,
    },
    avatar: {
      type: "string",
      default:
        "https://i0.wp.com/florrycreativecare.com/wp-content/uploads/2020/08/blank-profile-picture-mystery-man-avatar-973460.jpg?resize=300%2C300&ssl=1",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

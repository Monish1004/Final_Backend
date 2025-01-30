const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
      minLength: [3, "First Name should be atleast 3 characters long"],
      lowercase: true,
      maxLength: [20, "First Name should be atmost 20 characters long"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
      minLength: [3, "Last Name should be atleast 3 characters long"],
      lowercase: true,
      maxLength: [20, "Last Name should be atmost 20 characters long"],
    },
    mobileNumber: {
      type: String,
      unique: [true, "Mobile Number already exists"],
      required: [true, "Mobile Number is required"],
      trim: true,
      minLength: [10, "Mobile Number should be atleast 10 characters long"],
      maxLength: [10, "Mobile Number should be atmost 10 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      maxLength: [50, "Email should be atmost 50 characters long"],
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Email is not valid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minLength: [8, "Password should be atleast 8 characters long"],
      maxLength: [20, "Password should be atmost 20 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

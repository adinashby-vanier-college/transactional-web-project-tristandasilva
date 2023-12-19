import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  salt: {
    type: String,
  },
  password: {
    type: String,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.salt = crypto.randomBytes(128).toString("base64");
  this.password = crypto
    .pbkdf2Sync(this.password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return next();
});

export default mongoose.model("User", UserSchema);

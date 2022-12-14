import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: Number, required: true },
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "User");

export const User = mongoose.model("User", userSchema);

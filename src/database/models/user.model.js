import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },

    image: { type: String, default: "" },

    lastName: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    bio: { type: String },

    branch: { type: String, required: true },

    role: { type: String, required: true },

    status: { type: Boolean, default: true }

}, { timestamps: true });

export const Users = mongoose.model("user", userSchema);


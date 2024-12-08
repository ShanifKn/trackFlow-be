import mongoose, { Schema } from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },

    // category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    category: { type: String },

    specification: { type: String },

    brand: { type: String },

    description: { type: String },

    imageUrls: [{ type: String }],

    status: { type: Boolean, default: true },

    qrCode: { type: String }, // Placeholder for QR code data
}, { timestamps: true });


export const Products = mongoose.model("product", ProductSchema);


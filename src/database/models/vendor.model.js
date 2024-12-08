import mongoose, { Schema } from "mongoose";

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },

    image: { type: String, default: "" },

    contact_name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    phone: { type: String, required: true },

    license_no: { type: String, required: true },

    authority: { type: String, required: true },

    business_type: { type: String, required: true },

    vat_no: { type: String, required: true },

    category: { type: String, required: true },

    service_type: { type: String, required: true },

    status: { type: Boolean, default: true },

    address: { type: String, required: true },
}, { timestamps: true });

export const Vendors = mongoose.model("vendor", vendorSchema);


import mongoose, { Schema } from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    asset_type: { type: Schema.Types.ObjectId, required: true }, // Assuming asset_type is required
    asset_id: { type: String, required: true }, // Assuming asset_id is required
    co_code: { type: Schema.Types.ObjectId, required: true },
    company: { type: Schema.Types.ObjectId, required: true },
    sub_type: { type: Schema.Types.ObjectId, required: true },
    category: { type: Schema.Types.ObjectId, required: true },
    audit_category: { type: String, required: false },
    vendor: { type: String, required: false },
    purchase_date: { type: Date, required: false }, // Storing dates properly
    purchase_no: { type: String, required: false },
    purchase_quantity: { type: Number, required: false }, // Assuming quantity is numeric
    purchase_value: { type: Number, required: false }, // Assuming value is numeric
    description: { type: String, required: false },
    product: { type: Schema.Types.ObjectId, required: true },
    branch: { type: String, required: false },
    supervisor: { type: String, required: false },
    employee: { type: String, required: false },
    arn_no: { type: String, required: false },
    arn_date: { type: Date, required: false },
    asset_duplicate_id: { type: String, required: false },
    counting_remark: { type: String, required: false },
    condition: { type: String },
    condition_date: { type: Date },
    last_check_date: { type: Date },
    documents: [{ type: [String] }], // Array of strings for documents
  },
  { timestamps: true }
);

export const Assets = mongoose.model("asset", assetSchema);

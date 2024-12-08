import { Assets } from "../models/asset.model.js";

class AssetRepository {
  constructor() {}

  async CreateAsset({ _id, asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents }) {
    return await Assets.findOneAndUpdate({ _id }, { asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents }, { upsert: true, new: true });
  }

  async GetAssetAll() {
    return await Assets.find();
  }

  async GetAssetById({ _id }) {
    return await Assets.findOne({ _id });
  }
}

export default AssetRepository;

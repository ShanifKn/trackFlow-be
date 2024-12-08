import AssetHelper from "../api/helpers/asset.helper.js";
import { ObjectId } from "mongodb";

class AssetService {
  constructor() {
    this.assetHelper = new AssetHelper();
  }

  async CreateAsset({ _id, asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents }) {
    if (!_id) {
      _id = new ObjectId();
    }

    await this.assetHelper.CreateAsset({ _id, asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents });

    return { message: "New Asset has been Added" };
  }

  async GetAssetAll() {
    return await this.assetHelper.GetAssetAll();
  }

  async GetAssetById({ _id }) {
    return await this.assetHelper.GetAssetById({ _id });
  }
}

export default AssetService;

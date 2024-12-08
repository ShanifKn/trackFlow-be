import AssetRepository from "../../database/repositories/asset.repositories";

class AssetHelper {
  constructor() {
    this.repository = new AssetRepository();
  }

  async CreateAsset({ _id, asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents }) {
    return await this.repository.CreateAsset({ _id, asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents });
  }

  async GetAssetAll() {
    return await this.repository.GetAssetAll();
  }

  async GetAssetById({ _id }) {
    return await this.repository.GetAssetById({ _id });
  }
}

export default AssetHelper;

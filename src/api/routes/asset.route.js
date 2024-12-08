import AssetService from "../../services/asset.service.js";
import { tryCatch } from "../../utils/index.js";
import { LoginRateLimiter } from "../middlewares/apiLimiter.js";
import ExistCheck from "../validations/existCheck.js";
import { SchemaValidationForLogin } from "../validations/schema.validation.js";
import Validate from "../validations/validator.js";

const UserRouter = (app) => {
  const service = new AssetService();

  //@route create user/
  //@des  Create new user
  //@access private
  app.post(
    "/create-asset",
    Validate,
    tryCatch(async (req, res) => {
      const { _id, asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents } = req.body;

      const { message } = await service.CreateUser({ _id, asset_type, asset_id, co_code, company, sub_type, category, audit_category, vendor, purchase_date, purchase_no, purchase_quantity, purchase_value, description, product, branch, supervisor, employee, arn_no, arn_date, asset_duplicate_id, counting_remark, condition, condition_date, last_check_date, documents });

      return res.status(200).json({ message });
    })
  );

  //@route get assets/
  //@des  Get all assets
  //@access private
  app.get(
    "/assets",
    Validate,
    tryCatch(async (req, res) => {
      const data = await service.GetAssetAll();

      return res.status(200).json({ data });
    })
  );

  //@route get assets/
  //@des  Get asset by _id
  //@access private
  app.get(
    "/assets/:id",
    Validate,
    tryCatch(async (req, res) => {
      const _id = req.params.id;

      const data = await service.GetAssetById({ _id });

      return res.status(200).json({ data });
    })
  );
};

export default UserRouter;

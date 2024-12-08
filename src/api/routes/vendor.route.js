import UserService from "../../services/user.service.js";
import VendorService from "../../services/vendor.service.js";
import { tryCatch } from "../../utils/index.js";
import { LoginRateLimiter } from "../middlewares/apiLimiter.js";
import ExistCheck from "../validations/existCheck.js";
import { SchemaValidationForLogin, SchemaValidationForUser, SchemaValidationForVendor } from "../validations/schema.validation.js";
import Validate from "../validations/validator.js";

const VendorRouter = (app) => {
  const userExists = new ExistCheck();
  const service = new VendorService();

  // @route   GET /
  // @des     For health check
  // @access  Public
  app.get(
    "",
    tryCatch(async (req, res) => {
      return res.status(200).json("Running");
    })
  );


  // POST route to add a new user
  app.post('/add-vendor', SchemaValidationForVendor, Validate, tryCatch(async (req, res) => {
    const { name,
      contact_name,
      email,
      phone,
      license_no,
      authority,
      business_type,
      vat_no,
      category,
      service_type,
      address, } = req.body;
    console.log(name,
      contact_name,
      email,
      phone,
      license_no,
      authority,
      business_type,
      vat_no,
      category,
      service_type,
      address,)
    const user = await service.saveVendor({
      name,
      contact_name,
      email,
      phone,
      license_no,
      authority,
      business_type,
      vat_no,
      category,
      service_type,
      address,
    })
    res.status(201).json({ message: 'Vendor added successfully' });

  }));

  // GET route to fetch a user by ID
  app.get("/vendor/:id", tryCatch(async (req, res) => {

    const userId = req.params.id;
    const vendor = await service.getvendorById({ userId });
    res.status(200).json({ message: "Vendor fetched successfully", data: vendor });
  }));

  // GET route to fetch a user by ID
  app.get("/vendor-list", tryCatch(async (req, res) => {
    const vendor = await service.getAllVendors();
    res.status(200).json({ message: "User fetched successfully", data: vendor });

  }));

  // PUT route to update user details
  app.patch("/vendor/update", tryCatch(async (req, res) => {

    const { vendorId, name,
      contact_name,
      email,
      phone,
      license_no,
      authority,
      business_type,
      vat_no,
      category,
      service_type,
      address, } = req.body;
    const updatedUser = await service.updateVendor({
      vendorId,
      name,
      contact_name,
      email,
      phone,
      license_no,
      authority,
      business_type,
      vat_no,
      category,
      service_type,
      address,
    });
    res.status(200).json({ message: "Vendor updated successfully", data: updatedUser });

  }));
};

export default VendorRouter;

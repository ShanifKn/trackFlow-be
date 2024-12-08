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
  app.post('/add-vendor', SchemaValidationForVendor, Validate, async (req, res) => {
    try {
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
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error adding vendor' });
    }
  });

  // GET route to fetch a user by ID
  app.get("/vendor/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      const vendor = await service.getvendorById({ userId });
      res.status(200).json({ message: "Vendor fetched successfully", data: vendor });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  // GET route to fetch a user by ID
  app.get("/vendor-list", async (req, res) => {
    try {
      const vendor = await service.getAllVendors();
      res.status(200).json({ message: "User fetched successfully", data: vendor });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  // PUT route to update user details
  app.patch("/vendor/update", async (req, res) => {
    try {

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
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

export default VendorRouter;

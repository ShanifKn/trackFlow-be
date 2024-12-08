import { body, check } from "express-validator";
import VendorService from "../../services/vendor.service.js";

const service = new VendorService();
// banner sechme validation //
export const SchemaValidationForBanner = [
  // Title, check validity
  check("title").notEmpty().withMessage("Title is mandatory").isString().withMessage("Title must be a string"),

  // Banner Type, check validity
  check("bannerType").notEmpty().withMessage("Banner Type is mandatory").isString().withMessage("Banner Type must be a string"),

  // Visibility, check validity
  check("visibility").notEmpty().withMessage("Visibility is mandatory").isBoolean().withMessage("Visibility must be a boolean"),

  // Category, check validity
  check("category").notEmpty().withMessage("Category is mandatory").isArray().withMessage("Category must be an array of ObjectIds"),

  // SubCategory, check validity (if present)
  check("subCategory").optional(),

  // Product (if present), check validity
  check("product").optional(),

  // Image, check validity
  check("image").notEmpty().withMessage("Image URL is mandatory").isString().withMessage("Image URL must be a string"),
];

// login sechme validation //
export const SchemaValidationForLogin = [
  // email , check validity
  check("email").trim().notEmpty().withMessage("Email Id is mandatory").isEmail().withMessage("Invalid email address"),

  // password , check validity
  check("password").notEmpty().withMessage("Password is mandatory").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
];

export const SchemaValidationForCategory = [
  // Title validation
  check("title").trim().notEmpty().withMessage("Title is mandatory").isString().withMessage("Title must be a string"),

  // Tag validation (optional field, but if provided, must be a string)
  check("tag").optional().isString().withMessage("Tag must be a string"),

  // Description validation
  check("description").trim().notEmpty().withMessage("Description is mandatory").isString().withMessage("Description must be a string"),

  // Visibility validation
  check("visibility").notEmpty().withMessage("Visibility is mandatory").isBoolean().withMessage("Visibility must be a boolean"),

  // Publish date validation
  check("publishDate").notEmpty().withMessage("Publish date is mandatory").isISO8601().withMessage("Publish date must be a valid ISO 8601 date"),

  // Maximum discount validation
  check("maximumDiscount").notEmpty().withMessage("Maximum discount is mandatory").isNumeric().withMessage("Maximum discount must be a number"),

  // Featured category validation
  check("featuredCategory").notEmpty().withMessage("Featured category is mandatory").isBoolean().withMessage("Featured category must be a boolean"),
];


// User validation schema
export const SchemaValidationForUser = [
  // First Name validation
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is mandatory")
    .isString()
    .withMessage("First name must be a string"),

  // Last Name validation
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is mandatory")
    .isString()
    .withMessage("Last name must be a string"),

  // Email validation
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is mandatory")
    .isEmail()
    .withMessage("Email must be a valid email address"),

  // Password validation
  body("password")
    .notEmpty()
    .withMessage("Password is mandatory")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  // Bio validation (optional)
  body("bio")
    .optional()
    .isString()
    .withMessage("Bio must be a string"),

  // Branch validation
  body("branch")
    .notEmpty()
    .withMessage("Branch is mandatory")
    .isString()
    .withMessage("Branch must be a string"),

  // Role validation
  body("role")
    .notEmpty()
    .withMessage("Role is mandatory")
    .isString()
    .withMessage("Role must be a string"),
];
export const SchemaValidationForVendor = [
  // Business Name validation
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Business name is mandatory")
    .isString()
    .withMessage("Business name must be a string"),

  // Contact Name validation
  body("contact_name")
    .trim()
    .notEmpty()
    .withMessage("Contact name is mandatory")
    .isString()
    .withMessage("Contact name must be a string"),

  // Email validation
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is mandatory")
    .isEmail()
    .withMessage("Email must be a valid email address"),

  // Phone validation
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is mandatory")
    .isString()
    .withMessage("Phone number must be a string")
  ,

  // License Number validation
  body("license_no")
    .trim()
    .notEmpty()
    .withMessage("Trade license number is mandatory")
    .isString()
    .withMessage("License number must be a string")
    .custom(async (license_no) => {
      const exists = await service.checkLicenseNoExists(license_no);
      if (exists) {
        throw new Error("License number already exists in the database");
      }
      return true;
    }),

  // VAT Registration Number validation
  body("vat_no")
    .trim()
    .notEmpty()
    .withMessage("VAT registration number is mandatory")
    .isString()
    .withMessage("VAT registration number must be a string")
    .custom(async (vat_no, { req }) => {
      if (vat_no === req.body.license_no) {
        throw new Error("VAT registration number and Trade license number cannot be the same");
      }

      const exists = await service.checkVatNoExists(vat_no);
      if (exists) {
        throw new Error("VAT registration number already exists in the database");
      }
      return true;
    }),

  // Authority validation
  body("authority")
    .trim()
    .notEmpty()
    .withMessage("Issuing authority is mandatory")
    .isString()
    .withMessage("Authority must be a string"),

  // Business Type validation
  body("business_type")
    .trim()
    .notEmpty()
    .withMessage("Business type is mandatory")
    .isString()
    .withMessage("Business type must be a string"),

  // Product Category validation
  body("category")
    .trim()
    .notEmpty()
    .withMessage("Product category is mandatory")
    .isString()
    .withMessage("Category must be a string"),

  // Service Type validation
  body("service_type")
    .trim()
    .notEmpty()
    .withMessage("Service type is mandatory")
    .isString()
    .withMessage("Service type must be a string"),

  // Address validation
  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is mandatory")
    .isString()
    .withMessage("Address must be a string"),
];

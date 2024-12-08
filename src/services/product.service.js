import { INCORRECT_OTP } from "../api/constants/errorCodes.js";
import { hashPassword } from "../api/helpers/bcryptHelper.js";
import UserHelper from "../api/helpers/user.helper.js";
import { Vendors } from "../database/models/vendor.model.js";
import ProductRepository from "../database/repositories/product.repositories.js";
import VendorRepository from "../database/repositories/vendor.repositories.js";

class ProductService {
  constructor() {
    this.userHelper = new UserHelper();
    this.productRepository = new ProductRepository();
  }

  // Method to save a new user
  async saveProduct({ name, category, brand, description, specification, imageUrls }) {
    return await this.productRepository.saveProduct({
      name, category, brand, description, specification, imageUrls
    });
  }

  // Method to get a user by ID
  async getProductById({ productId }) {
    return await this.productRepository.getProductById({ productId })

  }

  // Method to get a user by ID
  async getAllProducts() {
    return await this.productRepository.getAllProducts()

  }

  // Method to update user details
  async updateProduct({ productId, name, category, brand, description, specification, imageUrls }) {
    return await this.productRepository.updateProduct({
      productId, name, category, brand, description, specification, imageUrls
    })

  }

  async checkLicenseNoExists(license_no) {
    const vendor = await Vendors.findOne({ license_no });
    return !!vendor; // Return true if vendor exists, false otherwise
  }

  async checkVatNoExists(vat_no) {
    const vendor = await Vendors.findOne({ vat_no });
    return !!vendor; // Return true if vendor exists, false otherwise
  }
}

export default ProductService;

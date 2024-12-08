import { INCORRECT_OTP } from "../api/constants/errorCodes.js";
import { hashPassword } from "../api/helpers/bcryptHelper.js";
import UserHelper from "../api/helpers/user.helper.js";
import { Vendors } from "../database/models/vendor.model.js";
import VendorRepository from "../database/repositories/vendor.repositories.js";

class VendorService {
  constructor() {
    this.userHelper = new UserHelper();
    this.userRepository = new VendorRepository();
  }

  // Method to save a new user
  async saveVendor({ name,
    contact_name,
    email,
    phone,
    license_no,
    authority,
    business_type,
    vat_no,
    category,
    service_type,
    address, }) {

    return await this.userRepository.saveVendor({
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
  }

  // Method to get a user by ID
  async getvendorById({ userId }) {
    return await this.userRepository.getvendorById({ userId })
  }

  // Method to get a user by ID
  async getAllVendors() {
    return await this.userRepository.getAllVendors()
  }

  // Method to update user details
  async updateVendor({ vendorId,
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
    address, }) {
    return await this.userRepository.updateVendor({
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

export default VendorService;

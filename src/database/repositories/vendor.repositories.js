import { Users } from "../models/user.model.js";
import { Vendors } from "../models/vendor.model.js";

class VendorRepository {
  constructor() { }

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
    try {

      const user = await Vendors.create({
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
      return user;
    } catch (error) {
      console.log(error)
      throw new Error(`Error saving user: ${error.message}`);
    }
  }

  // Method to get a user by ID
  async getvendorById({ userId }) {
    try {
      const user = await Vendors.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }

  // Method to get a user by ID
  async getAllVendors() {
    try {
      const user = await Vendors.find();
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }
  // Method to get a user by ID
  async CountUserByEmail({ email }) {
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
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
    try {
      const updatedUser = await Vendors.findByIdAndUpdate(
        vendorId,
        {
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
        },
        {
          new: true, // Return the updated document
          runValidators: true, // Validate the updated data against schema
        }
      );
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  // Method to delete a user
  async deleteUser(userId) {
    try {
      const deletedUser = await Users.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

export default VendorRepository;

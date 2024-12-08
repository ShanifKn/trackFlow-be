import { Vendors } from "../models/vendor.model.js";

class VendorRepository {
  constructor() { }

  // Method to save a new vendor
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
    const vendor = await Vendors.create({
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
    return vendor;
  }

  // Method to get a vendor by ID
  async getvendorById({ vendorId }) {
    const vendor = await Vendors.findById(vendorId);
    if (!vendor) {
      throw new Error("vendor not found");
    }
    return vendor;
  }

  // Method to get a vendor by ID
  async getAllVendors() {
    const vendor = await Vendors.find();
    if (!vendor) {
      throw new Error("vendor not found");
    }
    return vendor;

  }
  // Method to get a vendor by ID
  async CountvendorByEmail({ email }) {
    const vendor = await Vendors.findOne({ email });
    if (!vendor) {
      throw new Error("vendor not found");
    }
    return vendor;
  }

  // Method to update vendor details
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
    const updatedvendor = await Vendors.findByIdAndUpdate(
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
    if (!updatedvendor) {
      throw new Error("vendor not found");
    }
    return updatedvendor;
  }

  // Method to delete a vendor
  async deletevendor(vendorId) {
    const deletedvendor = await vendors.findByIdAndDelete(vendorId);
    return deletedvendor;
  }
}

export default VendorRepository;

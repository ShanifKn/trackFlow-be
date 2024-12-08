import { Products } from "../models/product.model.js";
import { Vendors } from "../models/vendor.model.js";

class ProductRepository {
  constructor() { }

  // Method to save a new product
  async saveProduct({ name, category, brand, description, specification, imageUrls }) {
    const product = await Products.create({
      name, category, brand, description, specification, imageUrls
    });
    return product;

  }

  // Method to get a product by ID
  async getProductById({ productId }) {
    const product = await Products.findById(productId);
    if (!product) {
      throw new Error("product not found");
    }
    return product;
  }

  // Method to get a product by ID
  async getAllProducts() {
    const product = await Products.find();
    if (!product) {
      throw new Error("product not found");
    }
    return product;
  }
  // Method to get a product by ID
  async CountproductByEmail({ email }) {
    const product = await products.findOne({ email });
    if (!product) {
      throw new Error("product not found");
    }
    return product;

  }

  // Method to update product details
  async updateProduct({ productId, name, category, brand, description, specification, imageUrls }) {
    console.log(productId)
    const updatedproduct = await Products.findByIdAndUpdate(
      productId,
      {
        name, category, brand, description, specification, imageUrls
      },
      {
        new: true, // Return the updated document
      }
    );
    if (!updatedproduct) {
      throw new Error("product not found");
    }
    return updatedproduct;

  }

  // Method to delete a product
  async deleteproduct(productId) {
    const deletedproduct = await Products.findByIdAndDelete(productId);
    return deletedproduct;

  }
}

export default ProductRepository;

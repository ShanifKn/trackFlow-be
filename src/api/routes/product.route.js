import ProductService from "../../services/product.service.js";
import productService from "../../services/product.service.js";
import VendorService from "../../services/vendor.service.js";
import { tryCatch } from "../../utils/index.js";
import { LoginRateLimiter } from "../middlewares/apiLimiter.js";
import ExistCheck from "../validations/existCheck.js";
import { SchemaValidationForLogin, SchemaValidationForProduct, SchemaValidationForVendor } from "../validations/schema.validation.js";
import Validate from "../validations/validator.js";

const ProductRouter = (app) => {
  const productExists = new ExistCheck();
  const service = new ProductService();

  // @route   GET /
  // @des     For health check
  // @access  Public
  app.get(
    "",
    tryCatch(async (req, res) => {
      return res.status(200).json("Running");
    })
  );


  // POST route to add a new product
  app.post('/add-product', SchemaValidationForProduct, Validate, tryCatch(
    async (req, res) => {

      const { name, category, brand, description, specification, imageUrls } = req.body;

      const product = await service.saveProduct({
        name, category, brand, description, specification, imageUrls
      })
      res.status(201).json({ message: 'Product added successfully' });

    }
  )

  );

  // GET route to fetch a product by ID
  app.get("/product/:id", tryCatch(
    async (req, res) => {

      const productId = req.params.id;
      const product = await service.getProductById({ productId });
      res.status(200).json({ message: "Product fetched successfully", data: product });

    }
  ));

  // GET route to fetch a product by ID
  app.get("/product-list", tryCatch(
    async (req, res) => {

      const product = await service.getAllProducts();
      res.status(200).json({ message: "Product fetched successfully", data: product });

    }
  )
  );

  // PACTH route to update product details
  app.patch("/product/update", SchemaValidationForProduct, Validate, tryCatch(
    async (req, res) => {
      const { productId, name, category, brand, description, specification, imageUrls } = req.body;
      const updatedproduct = await service.updateProduct({
        productId, name, category, brand, description, specification, imageUrls
      });
      res.status(200).json({ message: "Product updated successfully", data: updatedproduct });

    }
  )

  );
};

export default ProductRouter;

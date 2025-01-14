import express from "express";

import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/product.controller.js";
import upload from "../middelware/multer.js";
import adminAuth from "../middelware/admin.auth.js";

const productRouter = express.Router();

productRouter.post(
  "/add", adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts); // We have multer middleware that will proccess the multipart form data

export default productRouter;

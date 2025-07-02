import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
// import productRoutes from "../modules/product/routes.js";
import uploadRoutes from "../modules/upload/routes.js";
import categoryRoutes from "../modules/category/routes.js"

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

// Get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Define correct upload folder path: modules/upload/files
const uploadFolder = path.join(__dirname, "../modules/upload/files");




// ✅ Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    const uniqueId = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueId}-${file.originalname}`);
  },
});

const upload = multer({ storage });


router.use("/user", userRoutes);
// router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/upload", upload.single("file"), uploadRoutes);

export default router;

import express from "express";
import { showProducts } from "../controllers/productcontroller.js";

const router = express.Router();

router.get("/products", showProducts);

export default router;
import express from "express";
import { index, show, destroy, store } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", show);
router.delete("/:id", destroy);
router.post("/", store);

export default router;
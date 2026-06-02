import express from "express";
import { index, show, destroy, store, update } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", show);
router.delete("/:id", destroy);
router.post("/", store);
router.put("/:id", update);

export default router;
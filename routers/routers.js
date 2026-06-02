import express from "express";
import { index, show, destroy, store, update } from "../controllers/controllers.js";
import checkPostId from "../middelwares/checkPostId.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", checkPostId, show);
router.delete("/:id", checkPostId, destroy);
router.post("/", store);
router.put("/:id", checkPostId, update);

export default router;
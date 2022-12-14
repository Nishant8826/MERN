import express from "express";
const router = express.Router();

import {
  addUser,
  allUser,
  getById,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

router.post("/addUser", addUser);
router.get("/allUser", allUser);
router.get("/update/:id", getById);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;

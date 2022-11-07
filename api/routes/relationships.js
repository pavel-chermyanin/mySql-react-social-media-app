import express from "express";
const router = express.Router();

import {
  getRelationships,
  addRelationship,
  deleteRelationship,
} from "../controllers/relationship.js";

router.get("/", getRelationships);
router.post("/", addRelationship);
router.delete("/", deleteRelationship);

export default router;

import { Router } from "express";
import client, { MODEL_NAME } from "../config/AiConfig.js";
import { prisma } from "../config/PrismaInstance.js";
const router = Router();

router
  .route("/Completed_history")
  .post((req, res, next) => {
    if (req.body.completedProblem !== null && req.user) {
      // save the completed problem to the user history
    }
  })
  .get((req, res, next) => {
    if (req.user) {
      // return the completed problems from the users history
    }
  });

export default router;

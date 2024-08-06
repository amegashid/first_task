import { Router } from "express";

import CommandControllers from "../controllers/commandControllers.js";

const router = Router();

router.get('/save', CommandControllers.saveToMongo);

export default router;
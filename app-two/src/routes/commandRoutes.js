import { Router } from "express";

import CommandControllers from "../controllers/commandControllers.js";

const router = Router();

router.get('/test', CommandControllers.saveToMongo);
router.post('/test', CommandControllers.sendData)

export default router;
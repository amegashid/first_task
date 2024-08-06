import { Router } from "express";
import TestController from "../controllers/testController.js";

const router = Router();

router.get('/test', TestController.getAllTests);
router.post('/test', TestController.postData)

export default router;
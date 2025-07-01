import { Router } from "express";
import classController from "../controllers/class.controller";

const router = Router();

router.get('/getAllClasses', classController.getAllClass);
router.post('/createClasses', classController.createClass);

export default router;
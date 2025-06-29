import { Router } from "express";
import instructorController from "../controllers/instructor.controller";



const router = Router();

router.get('/getInstructor', instructorController.getAllInstructors);
router.post('/createInstructor', instructorController.createNewInstructor);


export default router;
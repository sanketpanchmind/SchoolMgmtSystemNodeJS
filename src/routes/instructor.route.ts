import { Router } from "express";
import instructorController from "../controllers/instructor.controller";
import verifyToken from "../middlewares/auth.middleware";



const router = Router();

router.get('/getInstructor', instructorController.getAllInstructors);
router.post('/createInstructor', instructorController.createNewInstructor);
router.delete('/deleteInstructor', instructorController.deleteInstructorbyId);
router.put('/updateInstructor', instructorController.updateInstructorbyId);
router.get('/classes', instructorController.getClassbyInstructors);
// router.get('/classes', verifyToken, instructorController.getClassbyInstructors);


export default router;
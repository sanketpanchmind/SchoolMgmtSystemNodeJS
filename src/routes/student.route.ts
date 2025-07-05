import { Router } from "express";
import studentController from "../controllers/student.controller";

const router = Router();

router.get('/getAllStudents', studentController.getAllStudents);
router.post('/registerStudent', studentController.registerNewStudent);
router.delete('/deleteStudentbyId', studentController.deleteStudentsbyId);


export default router;
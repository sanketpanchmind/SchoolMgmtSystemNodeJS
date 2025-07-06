import { Router } from "express";
import courseController from "../controllers/course.controller";

const router = Router();

router.get('/getAllCourses', courseController.getAllCourses);
router.post('/createCourse', courseController.createCourses);
router.delete('/deleteCourse', courseController.deleteCoursebyId);
router.put('/updateCourse', courseController.getAllCourses);
export default router;
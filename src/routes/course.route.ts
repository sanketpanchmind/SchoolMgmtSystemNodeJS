import { Router } from "express";
import courseController from "../controllers/course.controller";

const router = Router();

router.get('/getAllCourses', courseController.getAllCourses);
router.post('/createCourse', courseController.createCourses);
router.delete('/deleteCourse/:id', courseController.deleteCoursebyId);

export default router;
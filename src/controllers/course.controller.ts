import courseService from "../services/course.service";
import { Request, Response } from "express";


const getAllCourses = async (req: Request, res: Response) => {
    try {
        const getAll = await courseService.getCourses();
        res.status(200).json(getAll);
        return;
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error });
        return;
    }
};
const createCourses = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const newCourse = await courseService.newCourse(data);
        res.status(201).json(newCourse);
        return;
    } catch (error: any) {
        res.status(500).json({ message: "Error creating course", error: error.message || error });
        return;
    }
};

export default { getAllCourses, createCourses }
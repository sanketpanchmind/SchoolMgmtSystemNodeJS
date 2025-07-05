import courseService from "../services/course.service";
import { Request, Response } from "express";
import zodSchema from '../zodSchema'

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
        const data = zodSchema.createCourseSchema.safeParse(req.body);
        console.log("Parsed values ---", data)
        // const data = req.body;
        const newCourse = await courseService.newCourse(data.data);
        console.log(newCourse);
        res.status(201).json(newCourse);
        return;
    } catch (error: any) {
        res.status(500).json({ message: "Error creating course", error: error.message || error });
        console.log(error);
        return;
    }
};

const deleteCoursebyId = async (req: Request, res: Response) => {

    const course_id = Number(req.query.course_id);
    // if (!course_id || isNaN(course_id)) {
    //     return res.status(400).json({ message: 'Course ID is required as query parameter.' });
    // }
    try {
        // if (!course_id) {
        //     return res.status(400).json({ message: 'Course ID is required in the URL.' });
        // }
        // else {
        console.log("delete---", course_id);

        const deletedCourse = await courseService.deleteCourse(course_id);
        console.log("deleleted course ---", deletedCourse);
        res.status(200).json({ message: "Record Deleted" });
        return;
        // }
    }
    catch (e) {
        console.log(e);
    }


}

export default { getAllCourses, createCourses, deleteCoursebyId }
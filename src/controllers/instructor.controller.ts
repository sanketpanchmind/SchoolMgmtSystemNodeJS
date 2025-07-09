import { prismaclient } from "../prisma";
import instructorService from "../services/instructor.service";
import { Request, Response } from "express";


const getAllInstructors = async (req: Request, res: Response) => {
    const result = await instructorService.getInstructor();
    const updatedResult = result.map((instructor: any) => ({
        ...instructor,
        current_salary: instructor.current_salary.toString()
    }));
    console.log("instructors --", updatedResult);

    res.status(200).json({ message: "Data Found", updatedResult });
    return;
}

const createNewInstructor = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        // Check if email already exists
        const existingInstructor = await prismaclient.instructor.findFirst({
            where: { email: data.email }
        });

        if (existingInstructor) {
            res.status(409).json({ message: "Email already exists." });
            return;
        }

        // Insert new record
        const result = await instructorService.newInstructor(data);

        // Send inserted record in response
        res.status(200).json({
            message: "Record Inserted Successfully",
            result
        });
        return;
    }
    catch (e: any) {
        console.error('Error while creating instructor:', e);
        res.status(500).json({
            message: "Something went wrong.",
            error: e.message || e
        });
        return;
    }
}

const deleteInstructorbyId = async (req: Request, res: Response) => {

    const inst_id = Number(req.query.instructor_id);

    try {
        const result = await instructorService.deleteInstructor(inst_id);
        console.log(result);
        res.status(200).json({ message: "Record Deleted Successfully..", inst_id: result });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400);
        return;
    }

}

const updateInstructorbyId = async (req: Request, res: Response) => {

    const instructor_id = Number(req.query.instructor_id);
    const updateddata = req.body;

    try {
        const newdata = { instructor_id, ...updateddata };

        const result = await instructorService.updateInstructor(newdata);
        console.log(result);
        res.status(200).json({ message: "Record updated Successfully.", instructor_id: newdata });
        return;
    }
    catch (e) {
        res.status(400).json(e);
        console.log(e);
        return;
    }
}


const getClassbyInstructors = async (req: Request, res: Response) => {

    try {
        const instructorid = Number(req.query.instructor_id);
        const result = await instructorService.getClassbyInstructorService(instructorid);
        console.log(result);
        res.status(200).json({ message: "Got", class: { result } });
        return;
    }
    catch (e) {
        res.status(200).json({ message: "Got", class: e });
        console.log(e);
        return;
    }
}

const getStudentsfromClassIdController = async (req: Request, res: Response) => {
    const classId = Number(req.query.class_id);

    try {
        const result = await instructorService.getStudentfromClassIdService(classId);
        console.log(result);
        res.status(200).json({ message: "Record Fetched.", class: result });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Record Not Fetched.", class: e });
        return;
    }
}


export default { getAllInstructors, createNewInstructor, deleteInstructorbyId, updateInstructorbyId, getClassbyInstructors, getStudentsfromClassIdController }
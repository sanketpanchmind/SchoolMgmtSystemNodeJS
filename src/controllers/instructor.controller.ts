import { prismaclient } from "../prisma";
import instructorService from "../services/instructor.service";
import { Request, Response } from "express";


const getAllInstructors = async (req: Request, res: Response) => {
    const result = await instructorService.getInstructor();
    const updatedResult = result.map((instructor: any) => ({
        ...instructor,
        current_salary: instructor.current_salary.toString()
    }));
    console.log("instructors --", updatedResult); // ✅ now this will print actual data

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


export default { getAllInstructors, createNewInstructor }
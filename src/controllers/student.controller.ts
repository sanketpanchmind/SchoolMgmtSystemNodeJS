import { Request, Response } from "express";
import studentService from "../services/student.service";
import { prismaclient } from "../prisma";

const getAllStudents = async (req: Request, res: Response) => {

    const result = await studentService.getAllStudentData();
    console.log(result);
    res.status(200).json(result);
    return;
}

const registerNewStudent = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await studentService.registerStudentData(data);
        res.status(201).json({ message: "Data Recieved", data: result });
        return;
    }
    catch (error: any) {
        console.error("Error during student registration:", error);
        res.status(400).json({ message: "Error registering student", error: error.message || error });

        return;
    }
}

export default { getAllStudents, registerNewStudent }
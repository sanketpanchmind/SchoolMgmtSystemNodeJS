import { Request, Response } from "express";
import studentService from "../services/student.service";
import { prismaclient } from "../prisma";
import { sendEmail } from "../services/email.service";

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

const deleteStudentsbyId = async (req: Request, res: Response) => {
    const data = Number(req.query.student_id);
    try {
        console.log("student to be deleted - ", data);

        const result = await studentService.deleteStudent(data);
        console.log("deleted ---", result);
        res.status(200).json(result);
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
        return;
    }
}

const updateStudent = async (req: Request, res: Response) => {

    const student_id = Number(req.query.student_id);
    const updatedstudentbody = req.body;

    try {
        const updatedData = { student_id, ...updatedstudentbody };
        console.log("updated student --", updatedData);
        const result = await studentService.updateStudentbyId(updatedData);
        res.status(200).json({ message: "Student Updated Successfully", updatedStudent: result });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: e });
        return;
    }
}



const getSubjectbyClassIdController = async (req: Request, res: Response) => {

    try {
        const classId = Number(req.body.class_id);
        console.log(classId, typeof (classId));
        const result = await studentService.getSubjectbyClassId(classId);
        console.log(result);
        res.status(200).json(result);
        return;
    }
    catch (e) {
        res.status(400).json(e);
        console.log(e)
        return;
    }
}


const payFeesbyStudIdController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const feesdata = await studentService.payFeesbyStudIdService(data);
        console.log("fees id ====", feesdata);
        res.status(200).json({ message: "Record Fetched", fees: feesdata });
        return;
    }
    catch (e) {
        res.status(400).json(e);
        console.log(e)
        return;
    }
}

export default { getAllStudents, registerNewStudent, deleteStudentsbyId, updateStudent, getSubjectbyClassIdController, payFeesbyStudIdController }
import instructorRepository from "../repository/instructor.repository";
import { sendEmail } from "./email.service";


const getInstructor = async () => {
    return await instructorRepository.getAllIntructors();
}
const newInstructor = async (data: any) => {
    await sendEmail(
        data.email, 'Welcome to our School',
        `Hi ${data.instructor_name}, your registration is Successfull !!!`
    );
    return await instructorRepository.createIntructors(data);
}

const deleteInstructor = async (instructor_id: any) => {
    return await instructorRepository.deleteInstructor(instructor_id);
}

const updateInstructor = async (data: any) => {
    return await instructorRepository.updateInstructor(data);
}

const getClassbyInstructorService = async (instructor_id: any) => {
    return await instructorRepository.getClassbyInstructor(instructor_id);
}

const getStudentfromClassIdService = async (class_id: any) => {
    return await instructorRepository.getStudentsfromClassId(class_id);
}

const getFeesStatusbyClassId = async (class_id: any, status: any) => {
    return await instructorRepository.getFeesStatusbyClassId(class_id, status);
}
export default { getInstructor, newInstructor, deleteInstructor, updateInstructor, getClassbyInstructorService, getStudentfromClassIdService, getFeesStatusbyClassId }
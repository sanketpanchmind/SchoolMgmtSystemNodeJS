import studentRepository from '../repository/student.repository';
import { sendEmail } from './email.service';

const getAllStudentData = async () => {
    return await studentRepository.getAllStudent();
};
const registerStudentData = async (data: any) => {
    let dateofbirth = new Date(data.date_of_birth);
    let currentyear = new Date();

    console.log("date of birth, currentyear ---", dateofbirth.getFullYear(), currentyear.getFullYear());
    let age = currentyear.getFullYear() - dateofbirth.getFullYear();

    const updatedData = {
        ...data,
        age: age
    }
    await sendEmail(
        updatedData.emailId, 'Welcome to our School',
        `Hi ${updatedData.student_name}, your registration is Successfull !!!`
    );
    return await studentRepository.regsiterStudent(updatedData);
};

const deleteStudent = async (student_id: any) => {
    return await studentRepository.deleteStudentbyId(student_id);
}

const updateStudentbyId = async (data: any) => {
    let dateofbirth = new Date(data.date_of_birth);
    let currentyear = new Date();

    console.log("date of birth, currentyear ---", dateofbirth.getFullYear(), currentyear.getFullYear());
    let age = currentyear.getFullYear() - dateofbirth.getFullYear();

    const updatedData = {
        ...data,
        age: age
    }
    return await studentRepository.updateStudentbyId(updatedData);
}


const getSubjectbyClassId = async (class_id: any) => {
    return await studentRepository.getSubjectsfromClassId(class_id);
}
export default { getAllStudentData, registerStudentData, deleteStudent, updateStudentbyId, getSubjectbyClassId };

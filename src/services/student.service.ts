import studentRepository from '../repository/student.repository';

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
export default { getAllStudentData, registerStudentData, deleteStudent, updateStudentbyId };

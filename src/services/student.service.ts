import studentRepository from '../repository/student.repository';

const getAllStudentData = async () => {
    return await studentRepository.getAllStudent();
};
const registerStudentData = async (data: any) => {
    return await studentRepository.regsiterStudent(data);
};

export default { getAllStudentData, registerStudentData };

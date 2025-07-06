import instructorRepository from "../repository/instructor.repository";


const getInstructor = async () => {
    return await instructorRepository.getAllIntructors();
}
const newInstructor = async (data: any) => {
    return await instructorRepository.createIntructors(data);
}

const deleteInstructor = async (instructor_id: any) => {
    return await instructorRepository.deleteInstructor(instructor_id);
}

const updateInstructor = async (data: any) => {
    return await instructorRepository.updateInstructor(data);
}

export default { getInstructor, newInstructor, deleteInstructor, updateInstructor }
import instructorRepository from "../repository/instructor.repository";


const getInstructor = async () => {
    return await instructorRepository.getAllIntructors();
}
const newInstructor = async (data: any) => {
    return await instructorRepository.createIntructors(data);
}


export default { getInstructor, newInstructor }
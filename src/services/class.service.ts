import classRepository from "../repository/class.repository";

const getClasses = async () => {
    return await classRepository.getAllClasses();
}

const createClasses = async (data: any) => {
    return await classRepository.createClass(data);
}



export default { getClasses, createClasses }
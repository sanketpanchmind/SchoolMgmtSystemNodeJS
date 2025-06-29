import courseRepository from "../repository/course.repository";

const getCourses = async () => {
    return await courseRepository.getAllCourses();
}
const newCourse = async (data: any) => {
    return await courseRepository.createCourse(data);
}


export default { getCourses, newCourse }
import courseRepository from "../repository/course.repository";

const getCourses = async () => {
    return await courseRepository.getAllCourses();
}
const newCourse = async (data: any) => {
    return await courseRepository.createCourse(data);
}

const deleteCourse = async (course_id: any) => {
    return await courseRepository.deleteCoursebyId(course_id);
}


export default { getCourses, newCourse, deleteCourse }
import { PrismaClient } from "@prisma/client";
import { prismaclient } from "../prisma";


const getAllCourses = async () => {
    return await prismaclient.course.findMany({});
}

const createCourse = async (data: any) => {

    const newcourse = await prismaclient.course.create({
        data: {
            course_name: data.course_name,
            class_id: data.class_id,
            description: data.description
        }
    })
    return newcourse;
}

const deleteCoursebyId = async (course_id: any) => {
    return await prismaclient.course.delete({
        where: { course_id: course_id }
    })
}


export default { getAllCourses, createCourse, deleteCoursebyId }
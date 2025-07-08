import { Express } from "express";
import { prismaclient } from "../prisma";


const getAllIntructors = async () => {
    const instructors = await prismaclient.instructor.findMany({});
    console.log("repo - ", instructors);
    return instructors;
}

const createIntructors = async (data: any) => {
    const newinstructor = await prismaclient.instructor.create({
        data: {
            instructor_name: data.instructor_name,
            qualification: data.qualification,
            gender: data.gender,
            experience: data.experience,
            phone: data.phone,
            status: data.status,
            current_salary: data.current_salary,
            email: data.email,
            password: data.password,
            user: {
                create: {
                    email: data.email,
                    password: data.password,
                    role: 'instructor'
                }
            }
        }
    })
    return newinstructor;
}

const deleteInstructor = async (instructor_id: any) => {

    return await prismaclient.instructor.delete({
        where: {
            instructor_id: instructor_id
        }
    })
}

const updateInstructor = async (data: any) => {
    const updatedInstructor = await prismaclient.instructor.update({
        where: {
            instructor_id: data.instructor_id
        },
        data: {
            instructor_name: data.instructor_name,
            qualification: data.qualification,
            gender: data.gender,
            experience: data.experience,
            phone: data.phone,
            status: data.status,
            current_salary: data.current_salary,
            email: data.email,
            password: data.password,
            user: {
                update: {
                    email: data.emailId, password: data.password,
                }
            },
        }
    });

    return updatedInstructor;
}

const getClassbyInstructor = async (instructor_id: any) => {
    const result = await prismaclient.$queryRaw`
    SELECT class_id, class_name FROM "Class" WHERE "instructor" = ${instructor_id}`;
    return result;
};



export default { getAllIntructors, createIntructors, deleteInstructor, updateInstructor, getClassbyInstructor }
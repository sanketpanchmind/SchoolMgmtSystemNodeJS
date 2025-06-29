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


export default { getAllIntructors, createIntructors }
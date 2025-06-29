import { Express, Request, Response } from 'express'
import { prismaclient } from '../prisma'

const getAllStudent = async () => {

    const getstudData = await prismaclient.student.findMany({});
    return getstudData;
}

const regsiterStudent = async (data: any) => {

    const registerStud = await prismaclient.student.create({
        data: {
            student_name: data.student_name,
            phone: data.phone,
            address: data.address,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            enrollment_date: data.enrollment_date,
            emailId: data.emailId,
            password: data.password,
            course: { connect: { course_id: data.course_id } },
            user: {
                create: {
                    email: data.emailId, password: data.password, role: 'student'
                }
            }
        }
    })
    return registerStud
}

export default { getAllStudent, regsiterStudent }
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
            date_of_birth: data.date_of_birth + 'T00:00:00.000Z',
            gender: data.gender,
            age: data.age,
            enrollment_date: data.enrollment_date,
            emailId: data.emailId,
            password: data.password,
            user: {
                create: {
                    email: data.emailId, password: data.password, role: 'student'
                }
            },
            class: { connect: { class_id: data.class_id } }
        },

    })
    return registerStud
}

const deleteStudentbyId = async (student_id: any) => {
    return await prismaclient.student.delete({
        where: {
            student_id: student_id
        }
    })
}

const updateStudentbyId = async (data: any) => {

    const updatedStudent = await prismaclient.student.update({
        where: {
            student_id: data.student_id,
        },
        data: {
            student_name: data.student_name,
            phone: data.phone,
            address: data.address,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            age: data.age,
            enrollment_date: data.enrollment_date,
            emailId: data.emailId,
            password: data.password,
            user: {
                update: {
                    email: data.emailId, password: data.password, role: 'student'
                }
            },
            class: { connect: { class_id: data.class_id } }
        },
    })
    return updatedStudent;
}

export default { getAllStudent, regsiterStudent, deleteStudentbyId, updateStudentbyId }
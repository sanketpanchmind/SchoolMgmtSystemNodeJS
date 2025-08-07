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
            class: { connect: { class_id: data.classId } }
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
            class: { connect: { class_id: data.classId } }
        },
    })
    return updatedStudent;
}

const getSubjectsfromClassId = async (class_id: any) => {

    const result = await prismaclient.$queryRaw`
    select st.student_name, cl.class_name, cr.course_name 
    from "Student" st join "Class" cl on 
    st."classId" = cl.class_id
    join "Course" cr on
    cr.class_id = cl.class_id where cl.class_id = ${class_id}`;

    return result;
}

const payFeesbyStudId = async (data: any) => {

    const result = await prismaclient.feestbl.create({
        data: {
            student_id: data.student_id,
            class_id: data.class_id,
            amount: data.amount,
            payment_date: data.payment_date,
            due_date: data.due_date,
            payment_method: data.payment_method,
            status: data.status,
            academic_year: data.academic_year,
            semester: data.semester,
            description: data.description,
            receipt_number: data.receipt_number,

            student: {
                connect: {
                    student_id: data.studentId  // from JSON body
                }
            },
            class: {
                connect: {
                    class_id: data.classId     // from JSON body
                }
            }
        }
    })

    return result;



    // const result = await prismaclient.$queryRaw`
    //     select st.student_name, st."classId", ft.amount, ft.due_date 
    //     from 
    //     public."Student" st join public."Feestbl" ft
    //     on 
    //     st.student_id = ft.student_id and st."classId" = ft.class_id where ft.student_id = ${stud_id} and ft.class_id = ${class_id};
    // `
    // return result;
}




export default { getAllStudent, regsiterStudent, deleteStudentbyId, updateStudentbyId, getSubjectsfromClassId, payFeesbyStudId }
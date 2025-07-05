import { z } from 'zod';

const createClassSchema = z.object({
    class_name: z.string(),
    instructor: z.number()
})

const updateClassSchema = z.object({
    class_name: z.string().nonempty(),
    instructor: z.number()
})


const createCourseSchema = z.object({
    course_name: z.string().regex(/^[A-Za-z\s]+$/, { message: "Course name must not contain numbers or special characters" }),
    description: z.string(),
    class_id: z.number()
})



export default { createClassSchema, updateClassSchema, createCourseSchema }
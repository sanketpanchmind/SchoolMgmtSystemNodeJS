import { connect } from "http2";
import { prismaclient } from "../prisma";


const getAllClasses = async () => {
    return await prismaclient.class.findMany({});
}

const createClass = async (data: any) => {

    const result = await prismaclient.class.create({
        data: {
            class_name: "Master's Computer Science",
            course_id: 4, // ✅ foreign key, correct
            instructor: 2 // ✅ must not be undefined
        }
    })
    return result;
}

export default { getAllClasses, createClass }
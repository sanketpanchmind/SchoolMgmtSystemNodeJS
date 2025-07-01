import { connect } from "http2";
import { prismaclient } from "../prisma";


const getAllClasses = async () => {
    return await prismaclient.class.findMany({});
}

const createClass = async (data: any) => {
    const result = await prismaclient.class.create({
        data: {
            class_name: data.class_name,
            instructors: { connect: { instructor_id: data.instructor } }
        }
    })
    return result;
}

export default { getAllClasses, createClass }
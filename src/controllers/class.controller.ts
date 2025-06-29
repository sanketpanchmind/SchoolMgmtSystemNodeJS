import { Request, Response } from "express";
import classService from "../services/class.service";
import { prismaclient } from "../prisma";


const getAllClass = async (req: Request, res: Response) => {
    const getAll = await classService.getClasses();
    res.status(200).json(getAll);
    console.log(getAll);
    return;
}

const createClass = async (req: Request, res: Response) => {

    const data = req.body;
    const createAll = await classService.createClasses(data);
    res.status(200).json(createAll);
    return;
}



export default { getAllClass, createClass }



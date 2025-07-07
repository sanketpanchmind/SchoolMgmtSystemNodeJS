import loginService from "../services/login.service";
import { Request, Response } from "express";



const loginController = async (req: Request, res: Response) => {

    const data = req.body;

    try {
        const result = await loginService.loginService(data);
        if (!result) {
            res.status(401).json({ message: "result undefined" });
            console.log(result);
            return;
        }
        console.log("login Data - ", result);
        res.status(200).json({ message: 'User Exists.', result });
        // res.status(200).json({ message: 'User Exists.', result: result, token: result.token });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Login Failed", result: e });
        return;
    }
}


export default { loginController }
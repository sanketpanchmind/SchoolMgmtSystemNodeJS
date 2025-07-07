import { JWT_SECRET } from "../impcreds";
import { prismaclient } from "../prisma";
import * as jwt from 'jsonwebtoken';

const login = async (data: any) => {
    const result = await prismaclient.user.findFirst({
        where: {
            email: data.email,
            password: data.password
        }
    });
    if (result?.email && result.password) {
        const token = jwt.sign({
            email: data.email,
        }, JWT_SECRET)
        return { result, token };
    }
}

export default { login }
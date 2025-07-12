import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';



const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.body = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};


export default verifyToken;

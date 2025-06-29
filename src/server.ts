import express, { Request, Response } from 'express';
import { PORT } from './impcreds';
import studentRoutes from './routes/student.route';
import courseRoutes from './routes/course.route';
import instructorRoutes from './routes/instructor.route'
import classRoutes from './routes/class.route'

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Working");
});

app.use('/api', courseRoutes);
app.use('/studentapi', studentRoutes);
app.use('/instructorapi', instructorRoutes);
app.use('/classapi', classRoutes);

app.listen(PORT, () => {
    console.log(`School Mgmt System.....${PORT}`);
})
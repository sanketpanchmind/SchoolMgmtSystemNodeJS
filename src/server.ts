import express, { Request, Response } from 'express';
import { PORT } from './impcreds';
import studentRoutes from './routes/student.route';
import courseRoutes from './routes/course.route';
import instructorRoutes from './routes/instructor.route';
import classRoutes from './routes/class.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import loginRoutes from './routes/login.route'

const app = express();

app.use(express.json());

// Swagger Setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sample Route
app.get('/', (req: Request, res: Response) => {
    res.send("Working");
});

// Routes
app.use('/api', courseRoutes);
app.use('/studentapi', studentRoutes);
app.use('/instructorapi', instructorRoutes);
app.use('/classapi', classRoutes);
app.use('/loginapi', loginRoutes);



// more
/*
--- Fees Management
/payFees
/getFeeStatus
/generateReceipt

--- Notifications
Email notifications on class assignment or registration (use nodemailer)
SMS notifications using Twilio (optional)
*/

// Start Server
app.listen(PORT, () => {
    console.log(`School Mgmt System.....${PORT}`);
});

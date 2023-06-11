import express, { Application } from 'express';
import cors from 'cors';
import { logger } from './share/logger';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

logger.info(app.get('env'));

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// Testing
// app.get('/', async () => {
//   // Promise.reject((new Error('Unhandled Promise rejection')))
// });

// global error handler
app.use(globalErrorHandler);

export default app;

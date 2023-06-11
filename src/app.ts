import express, { Application } from 'express';
import cors from 'cors';
import { logger } from './shared/logger';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

logger.info(app.get('env'));

app.use('/api/v1/', routes);

// global error handler
app.use(globalErrorHandler);

export default app;

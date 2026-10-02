import express, { Request, Response, NextFunction } from 'express';
import { CONFIG } from './config/env';
import healthRoutes from './routes/healthRoutes';
import { notFoundHandler, errorHandler } from './middleware/errorHandler';

const app = express();

// Middleware
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use(CONFIG.API_PREFIX, healthRoutes);

// Test Error Route (to verify error handling works)
app.get('/debug-error', () => {
  throw new Error('Simulated runtime exception');
});

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: `Welcome to ${CONFIG.APP_NAME}` });
});

// Fallback & Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(CONFIG.PORT, () => {
  console.log(`[SYS_INIT] ${CONFIG.APP_NAME} running on port ${CONFIG.PORT} (${CONFIG.ENV})`);
});
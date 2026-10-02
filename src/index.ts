import express, { Request, Response, NextFunction } from 'express';
import { CONFIG } from './config/env';
import healthRoutes from './routes/healthRoutes';

const app = express();

// Middleware: Enable JSON parsing for incoming request bodies
app.use(express.json());

// Middleware: Basic request logger
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api', healthRoutes);

// Root Fallback
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Reactivation Core API' });
});

app.listen(CONFIG.PORT, () => {
  console.log(`[SYS_INIT] Express server running on port ${CONFIG.PORT}`);
});
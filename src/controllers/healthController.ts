import { IncomingMessage, ServerResponse } from 'node:http';
import { CONFIG } from '../config/env';

export const getHealthStatus = (req: IncomingMessage, res: ServerResponse): void => {
  const healthData = {
    status: 'online',
    app: CONFIG.APP_NAME,
    version: CONFIG.VERSION,
    environment: CONFIG.ENV,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(healthData, null, 2));
};

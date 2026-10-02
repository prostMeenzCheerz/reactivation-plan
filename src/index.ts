import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { CONFIG } from './config/env';
import { getHealthStatus } from './controllers/healthController';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/health' || req.url === '/') {
    getHealthStatus(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
});

server.listen(CONFIG.PORT, () => {
  console.log(`[SYS_INIT] ${CONFIG.APP_NAME} running on port ${CONFIG.PORT}`);
});

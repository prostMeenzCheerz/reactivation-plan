import { createServer, IncomingMessage, ServerResponse } from 'node:http';

const PORT: number = Number(process.env.PORT) || 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      status: 'online',
      system: 'Reactivation Plan Core',
      timestamp: new Date().toISOString(),
    })
  );
});

server.listen(PORT, () => {
  console.log(`[SYS_INIT] Server executing on port ${PORT}`);
});

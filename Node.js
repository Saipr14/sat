const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.use(express.json());

app.post('/update', (req, res) => {
  const data = req.body.data; // Assuming data is sent as JSON { "data": ... }
  console.log('Received data from Arduino:', data);

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data.toString());
    }
  });

  res.sendStatus(200);
});

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});

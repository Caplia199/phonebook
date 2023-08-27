// const express = require('express');
// const server = require('../config');
// const cors = require('cors');
// const router = require('../src/server/routes/routes');

// const PORT = server.PORT || 3002;

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api', router);

// const start = async () => {
//     try {
//         app.listen(PORT, () => console.log('Server started on port ' + PORT))
//     } catch {
//         console.log('ERROR')
//     }
// };

// start();


const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const router = require('../src/server/routes/routes');
const number = require('../src/server/controllers/Controllers');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message);
      if (data.type === 'newNumber') {
        const result = await number.postNumber(data.data);
        console.log('Received newNumber:', data.data);

        ws.send(JSON.stringify({ type: 'numberSaved', data: 'Number saved successfully' }));
      }
    } catch (error) {
      console.error('Error processing client message:', error);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = { server, wss };

// const socketIo = require('socket.io');
// const express = require('express');
// const cors = require('cors');
// const router = require('../src/server/routes/routes');
// const { setupSocket } = require('../src/server/soket/socket'); 

// const PORT = process.env.PORT || 3002;

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api', router);

// const httpServer = app.listen(PORT, () => {
//   console.log('Server started on port ' + PORT);
// });

// const io = socketIo(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//   },
// });

// setupSocket(io);













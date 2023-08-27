const express = require('express');
const server = require('../config');
const cors = require('cors');
const router = require('../src/server/routes/routes');

const PORT = server.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => console.log('Server started on port ' + PORT))
    } catch {
        console.log('ERROR')
    }
};

start();




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













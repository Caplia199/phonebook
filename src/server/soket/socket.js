// const number = require('../routes/routes'); // Файл с логикой работы с номерами

// function setupSocket(io) {
//   io.on('connection', (socket) => {
//     console.log('A client has connected');

//     socket.emit('message', 'Welcome to the WebSocket server');

//     socket.on('clientEvent', async (data) => {
//       console.log('Received data from client:', data);

//       if (data.action === 'getAllNumbers') {
//         const allNumbers = await number.getAllNumbers();
//         socket.emit('databaseData', allNumbers);
//       } else if (data.action === 'postNumber') {
//         const { code, number } = data;
//         const result = await number.postNumber({ body: { code, number } });
//         socket.emit('databaseResponse', result);
//       } else if (data.action === 'deleteNumber') {
//         const { id } = data;
//         const result = await number.deleteNumber({ params: { id } });
//         socket.emit('databaseResponse', result);
//       }
//     });

//     socket.on('disconnect', () => {
//       console.log('A client has disconnected');
//     });
//   });
// }

// module.exports = { setupSocket };


// Вот так правильнее

// const WebSocket = require('ws');
// const number = require('../controllers/Controllers');

// function initializeWebSocket(server) {
//   const wss = new WebSocket.Server({ server });

//   wss.on('connection', (ws) => {
//     console.log('WebSocket connected');

//     ws.on('message', async (message) => {
//       try {
//         const data = JSON.parse(message);
//         if (data.type === 'newNumber') {
//           const result = await number.postNumber(data.data);
//           console.log('Received newNumber:', data.data);

//           ws.send(JSON.stringify({ type: 'numberSaved', data: 'Number saved successfully' }));
//         }
//       } catch (error) {
//         console.error('Error processing client message:', error);
//       }
//     });
//   });
// }

// module.exports = initializeWebSocket;


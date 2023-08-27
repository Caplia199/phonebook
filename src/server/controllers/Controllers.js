// const db = require('../db/DB')

// class number {
//     async getAllNumbers(req, res) {
//         const allNumber = await db.query('SELECT * FROM phone_number;')
//         return res.json(allNumber.rows)
//     };
//     async postNumber(req, res) {
//         const { id, code, number } = req.body;
//         console.log(req.body);
    
//         // const existingNumber = await db.query('SELECT * FROM phone_number WHERE code = $1 AND number = $2;', [code, number]);
    
//         // if (existingNumber.rows.length > 0) {
//         //   return res.status(400).json('Номер уже есть в базе!');
//         // }
    
//         const newNumber = await db.query('INSERT INTO phone_number (id, code, number) VALUES ($1, $2, $3);', [id, code, number]);
//         return res.json(`Added number: +${code} ${number}`);
        
//     }
//     async deleteNumber(req, res) {
//         const id = req.params.id;
//         console.log('deleted');
//         const deleteNumber = await db.query('DELETE FROM phone_number where id = $1;', [id])
//         return res.json('ok')
//     };
// };

// module.exports = new number();



const db = require('../db/DB');
const WebSocket = require('ws');

class NumberController {
  async getAllNumbers(req, res) {
    try {
      const allNumber = await db.query('SELECT * FROM phone_number;');
      res.json(allNumber.rows);
    } catch (error) {
      console.error('Error fetching numbers:', error);
      res.status(500).json({ error: 'Failed to fetch numbers' });
    }
  }

  async postNumber(data) {
    const { id, code, number } = data;
  
    try {
      await db.query('INSERT INTO phone_number (id, code, number) VALUES ($1, $2, $3);', [id, code, number]);
  
      const { wss } = require('../../../public/server'); // Импортируйте WebSocket-сервер
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'newNumber', data: { id, code, number } }));
        }
      });
  
      return `Added number: +${code} ${number}`;
    } catch (error) {
      console.error('Error adding a new number:', error);
      throw new Error('Failed to add a new number');
    }
  }  

  async deleteNumber(req, res) {
    const id = req.params.id;

    try {
      await db.query('DELETE FROM phone_number where id = $1;', [id]);

      const {wss} = require('../../../public/server'); 
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'deletedNumber', data: { id } }));
        }
      });

      res.json('Number deleted successfully');
    } catch (error) {
      console.error('Error deleting the number:', error);
      res.status(500).json({ error: 'Failed to delete the number' });
    }
  }

  handleWebSocketMessage(message) {
    console.log(`Received WebSocket message: ${message}`);
  }
}

module.exports = new NumberController();

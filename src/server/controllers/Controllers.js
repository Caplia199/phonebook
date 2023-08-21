const db = require('../db/DB')

class number {
    async getAllNumbers(req, res) {
        const allNumber = await db.query('SELECT * FROM phone_number;')
        return res.json(allNumber.rows)
    };
    async postNumber(req, res) {
        const { id, code, number } = req.body;
        console.log(req.body);
    
        // const existingNumber = await db.query('SELECT * FROM phone_number WHERE code = $1 AND number = $2;', [code, number]);
    
        // if (existingNumber.rows.length > 0) {
        //   return res.status(400).json('Номер уже есть в базе!');
        // }
    
        const newNumber = await db.query('INSERT INTO phone_number (id, code, number) VALUES ($1, $2, $3);', [id, code, number]);
        return res.json(`Added number: +${code} ${number}`);
        
    }
    async deleteNumber(req, res) {
        const id = req.params.id;
        console.log('deleted');
        const deleteNumber = await db.query('DELETE FROM phone_number where id = $1;', [id])
        return res.json('ok')
    };
};

module.exports = new number();
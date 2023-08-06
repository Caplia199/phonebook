const db = require('../db/DB')

class number {
    async getAllNumbers(req, res) {
        const allNumber = await db.query('SELECT * FROM phone_number;')
        return res.json(allNumber.rows)
    };
    async postNumber(req, res) {
        const {code, number} = req.body;
        console.log(req.body);
        const newNumber = await db.query('INSERT INTO phone_number (code, number) VALUES ($1, $2);', [code, number])
        res.json('Added number: ' + code + ' ' + number)
    };
    async deleteNumber(req, res) {
        const id = req.params.id;
        console.log('deleted');
        const deleteNumber = await db.query('DELETE FROM phone_number where id = $1;', [id])
        return res.json('ok')
    };
};

module.exports = new number();
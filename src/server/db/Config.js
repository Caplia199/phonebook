const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'phone_nimber',
    user: 'postgres',
    password: 'postgres',
  })

module.exports = client;
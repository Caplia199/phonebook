const express = require('express');
const server = require('../config');
const cors = require('cors');
const router = require('../src/server/routes/routes');

const PORT = server.PORT || 3001;

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

















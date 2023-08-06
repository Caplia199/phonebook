const Router = require('express');
const router = new Router();
const number = require('../controllers/Controllers');

router.post('/', number.postNumber);
router.get('/get', number.getAllNumbers);
router.delete('/:id', number.deleteNumber);

module.exports = router;
var express = require('express');
var router = express.Router();
var {pagar} = require ('../controllers/pagamentos');
/* GET users listing. */
router.get('/', pagar);


module.exports = router;

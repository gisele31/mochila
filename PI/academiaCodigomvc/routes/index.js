var express = require('express');
var router = express.Router();
var {loguin} = require ('../controllers/index');
/* GET home page. */
router.get('/', loguin);



module.exports = router;


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Alteração no retorno da rota');
});

router.get('/rota-criada', function(req, res, next) {
  res.send('Retornou minha primeira rota');
});

module.exports = router;

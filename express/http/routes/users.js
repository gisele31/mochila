var express = require('express');
var router = express.Router();
var { trazerDados, inserirDados, alterarDados, deletarDados, uploadArquivo } = require('../controllers/users');

//alterações para o funcionamento do multter

const multer = require("multer")
const upload = multer({dest:'uploads/'})

//////////////////////////

router.get('/', trazerDados);

router.post('/inserir', inserirDados);

router.put('/alterar/:id', alterarDados);

router.delete('/deletar/:id', deletarDados);

router.post('/upload', upload.single('arquivo'), uploadArquivo)

module.exports = router;
const express = require('express') // Importa a biblioteca express
const router = express.Router() // Armazena o router do express

const controller = require('../controllers/adminController') // ******* Adicionamos essa linha de código que importa todo nosso controller aqui

router.get('/', controller.listarAgendamento) // Rota quando o usuário acessar
router.post('/cadastrar', controller.cadastrarAgendamento) // Rota quando o usuário acessar
router.put('/alterar', controller.alterarUsuario) // Rota quando o usuário acessar
router.delete('/deletar', controller.deletarUsuario) // Rota quando o usuário acessar

module.exports = router // Exportar arquivo para conseguirmos executar em um arquivo externo
const AgendamentoModels = require('../models/agendamentoModel')

class usuarioController { // Cria a classe Controller pra gente conseguir criar as funções


    static async listarAgendamento(req, res) {

        const usuario = await AgendamentoModels.findAll()
        res.json(usuario)
    }


    static async cadastrarAgendamento(req, res) {
        const { nome, servicos, data, horario } = req.body

        const novoAgendamento = await AgendamentoModels.create({ nome, servicos, data, horario })

        res.json({
            message: "Usuário cadastrado com sucesso",
            dados: novoAgendamento
        })


        // res.send("Você acessou a rota /cadastrar")
    }
    static async cadastrarUsuario(req, res) {
        res.send("Você acessou a rota /cadastrar")
    }

    static async alterarUsuario(req, res) {
        res.send("Você acessou a rota /alterar")
    }

    static async deletarUsuario(req, res) {
        res.send("Você acessou a rota /deletar")
    }

}

module.exports = usuarioController// Exporta essa classe pra gente conseguir acessar em um lugar diferente
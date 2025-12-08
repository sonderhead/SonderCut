const { DataTypes } = require('sequelize') // Importa o DataTypes do sequelize que serve pra gente definir o tipo de dados que vamos armazenar no banco
const conexao = require('../config/dbConfig') // Importa o arquivo de conexão

const AgendamentoModels = conexao.define('agendamento', { // Criar uma tabela chamada alunos
    id:{
        type: DataTypes.INTEGER, // Diz que esse campo vai ser do tipo INTEGER
        autoIncrement: true, // Diz que esse campo vai ser preenchido sozinho
        primaryKey: true // Diz que esse vai ser nosso identificador
    },
    nome: {
        type: DataTypes.STRING // Diz que esse campo vai ser do tipo STRING
    },
    servicos:{
        type: DataTypes.STRING // Diz que esse campo vai ser do tipo STRING
    },
    horario:{
        type: DataTypes.STRING
    },
    dia:{
        type: DataTypes.STRING
    }
})

AgendamentoModels.sync() // Executa o model que montamos e cria no banco de dados

module.exports = AgendamentoModels // Exporta o módulo
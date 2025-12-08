const sequelize = require('sequelize') // Importa o sequelize no nosso projeto

const conexao = new sequelize('defaultdb', 'avnadmin', 'AVNS_fLS2dJESdnERo0LID54', {
    host: 'mysql-22e01910-littlemagoo1-7e9f.c.aivencloud.com',
    port:'12031',
    dialect: 'mysql',
    dialectOptions:{ //basicamente é o sertificado de segurança
        ssl:{
            require:true,
            rejectUnauthorized: false
        }
    },
    logging:false
})
async function testarConexao() { // Função para testar a conexão
    try{
        await conexao.authenticate() // Função para fazer a conexão com o banco de dados
        console.log("Banco conectado com sucesso")
    } catch(err){
        console.log("Erro ao conectar com o banco de dados")
    }
}

testarConexao() // Executa a função de conexão

module.exports = conexao // Exporta a conexão
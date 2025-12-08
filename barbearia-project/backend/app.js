const express = require("express")
const router = require("./routes/router")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', router)

const port = 8081
app.listen(port, () => {
    console.log("Servidor rodando na porta 8081")
})
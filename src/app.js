//importar as configurações do servidor
const {app,port} = require('../server')

//rptas
const index = require('./routes/index')(app)
const sobre = require('./routes/sobre')(app)

//escuta do servidor
app.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
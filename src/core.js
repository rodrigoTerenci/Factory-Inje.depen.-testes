import createServer from './server.js'
import createDatabase from './database.js'

function createCore(configuration={}){
    const webServer = configuration.webServer || createServer()
    const database = configuration.database || createDatabase()

        function start(){
            webServer.start()
            database.start()
            console.log('Conecções Estabelecidas...')
        }
        function stop(){
            console.log('Desconectando-se ....')
            webServer.stop()
            database.stop()
        }    
        return{
            start,
            stop
        }
}
createCore()

export default createCore
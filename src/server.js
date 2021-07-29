import express from 'express'
import http from 'http'
const
    app = express(),
    server = http.createServer(app),
    port = process.env.PORT || 3000
function createServer(){
  function start(){
    

    app.get('/',(req,res)=>
        res.send("Hello Worldfd")
      )

      app.use(express.static('.'))
      server.listen(port)
    
  }
  function stop(){
    console.log("SERVER PARADO...")
    //server.close()
    
  }
  return{
    start,
    stop
  }
}

export default createServer
function createDatabase(){
    function start(){
        console.log('Conectando-se ao DB...')
    }
    function stop(){
        console.log('Desconectando-se ao DB...')
    }    
    return{
        start,
        stop
    }
}

export default createDatabase

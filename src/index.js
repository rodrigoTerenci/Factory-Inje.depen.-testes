import createCore from './core.js'
//var fs = require('fs');
//var src = fs.readFileSync(__dirname + '/foo.txt', 'utf8');

//module.exports = function (x) { return src.replace(x, 'zzz') };


const core = createCore()

try{
    core.start()
   // core.stop()
}
catch(error){
    console.error(error)
}
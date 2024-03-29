//import { text } from "express"
import createCore from '../src/core.js'
//import expect from 'expect.js'
import {describe, expect, test} from '@jest/globals'
/*import isNode from 'detect-node'

export async function analyticsLogEvents(event, params) {
  if (!isNode) {
    const firebase = await import('firebase/app')
    await import('firebase/analytics')
    firebase.default.analytics().logEvent(event, params)
  }
}*/

function createMock(){
    function start(){
        console.log('Mock...')
    }
    function stop(){
        console.log('Stop Mock...')
    }
    return{
        start,
        stop
    }
    
}

describe('Core quando importado', () =>{
   it('deve ter o método #start e #stop',()=>{

    const core = createCore()
        expect(core).toHaveProperty('start')
        expect(core).toHaveProperty('stop')
    });
})

describe('Core quando incializado', ()=> {
   it('não deve retornar erros',() => {
        const databaseMock = createMock()
        const webserverMock = createMock()
        
        //FORÇANDO O TESTE DAR CERTO
        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });
        expect(()=> {
            core.start()
            core.stop()
        }).not.toThrowError()
    });
});
/***************Documetação usadas*************
 * https://github.com/Automattic/expect.js*****
 * https://www.youtube.com/watch?v=uyOJ2jjBtBs*
 * https://mochajs.org/                       *
 *                                            *
 * ********************************************/
 
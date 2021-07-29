import { text } from "express";
import createCore from "../src/core.js"

describe('Core quando importado', () =>{
    teste('deve ter o método #start e #stop',()=>{
        const core = createCore()
        expect(core).toHaveProperty('start')
    });
});
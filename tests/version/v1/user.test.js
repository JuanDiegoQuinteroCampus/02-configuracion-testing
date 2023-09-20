import { saludar } from "../../../version/v1/user"
describe("test del archivo user.js ", () =>{
    test('la funcion saludar, devulve "Hola Mundo"', ()=>{
    
        expect(saludar()).toBe("Hola Mundo")
      
    })
    test('la funcion saludar, devulve "string"', ()=>{
    
        expect(typeof saludar()).toBe("string")
    })
})
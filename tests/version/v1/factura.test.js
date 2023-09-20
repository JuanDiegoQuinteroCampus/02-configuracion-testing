import { obtener } from "../../../version/v1/factura"
describe("test obtener", () =>{
    test('el objeto esperado {...id, ...nombre}', () => { 
        let obj = {
            id:1,
            nombre:"Juan"

        }
        let app = obtener();
        expect(app).toStrictEqual(obj);
     })
} )
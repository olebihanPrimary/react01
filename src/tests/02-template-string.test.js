import { getSaludo } from "../base-pruebas/02-template-string";

describe('Prueba getSaludo', () => {
    
    test('getSaludo debe retornar saludos al nombre', () => {
        
            const name = 'Osky';
            const message = getSaludo(name);
            expect( message ).toBe(`Hola ${name}`);
         })

     })
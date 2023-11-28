import { retornaArreglo } from "../base-pruebas/07-deses-arr"

describe('Prueba deses-arr', () => { 
    
    test('debe retornar un string y un numero', () => { 
        
            const [letras, numeros] = retornaArreglo();

            expect(letras).toBe('ABC')
            expect(numeros).toBe(123)

            expect(typeof letras).toBe('string');
            expect(typeof numeros).toBe('number');

         })
    
     })
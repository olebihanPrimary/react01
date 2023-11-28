import { getHeroeByIdAsync } from "../base-pruebas/09-promesas"

describe('Prueba en promesas', () => { 
    
    test('Probando promesas getHeroebyIdAsync', (done) => { 

        const id = 100;
        getHeroeByIdAsync( id )
            .then ( hero => {
                
                

                done();
            })
            .catch ( error => {

                expect(error).toBe(`No se puede encontrar el héroe ${ id }`);

                done();

            })
            
            

     });


 })
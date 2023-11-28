import { getImagen } from '../base-pruebas/11-async-await'


describe('prueba async await', () => { 

    test(' getImagen debe retornar url de la imagen', async() => { 

        const url = await getImagen( );
        console.log(url);

        expect( typeof url ).toBe('string');


     })


 })
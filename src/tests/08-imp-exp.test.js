import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp"

describe('Prueba 08-imp-exp', () => { 


    test('Deber retornar un heroe por ID', () => { 
        
        const id = 1;

        const heroe = getHeroeById( id );
    
        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        
        })

    test('Debe retornar heroes por owner', () => { 

        const   owner = 'DC';
        const   heroes = getHeroesByOwner( owner );

        console.log( heroes );

        expect( heroes ).toEqual(  heroes.filter( heroe => heroe.owner === owner))




     })
 

 
 })